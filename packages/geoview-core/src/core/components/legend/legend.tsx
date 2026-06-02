import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useTheme } from '@mui/material';

import { ToggleAll } from '@/core/components/toggle-all/toggle-all';
import { Box, List, Typography } from '@/ui';
import { logger } from '@/core/utils/logger';

import { getSxClassesMain, getSxClasses } from './legend-styles';
import { LegendLayer } from './legend-layer';
import { LegendFullscreen, LegendFullscreenButton } from './legend-fullscreen';
import { CONTAINER_TYPE } from '@/core/utils/constant';
import type { TypeContainerBox } from '@/core/types/global-types';
import { useEventListener } from '@/core/components/common/hooks/use-event-listener';
import { useStoreGeoViewMapId } from '@/core/stores/geoview-store';
import { useStoreLayerTopLevelLayerPaths } from '@/core/stores/states/layer-state';

interface LegendType {
  containerType: TypeContainerBox;
}

// Constant style outside of render (styles)
const styles = {
  noLayersContainer: {
    padding: '2rem',
    margin: '2rem',
    width: '100%',
    textAlign: 'center',
    height: 'fit-content',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
} as const;

// Constant style outside of render (responsive widths)
const responsiveWidths = {
  full: { xs: '100%' },
  responsive: {
    xs: '100%',
    sm: '50%',
    md: '33.33%',
    lg: '25%',
    xl: '25%',
  },
} as const;

/** Main container styles for the legend component. */
const sxClassesMain = getSxClassesMain();

export function Legend({ containerType }: LegendType): JSX.Element | null {
  logger.logTraceRender('components/legend/legend');

  // Hooks
  const { t } = useTranslation<string>();
  const theme = useTheme();

  // State
  const [legendColumnCount, setLegendColumnCount] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const fullScreenBtnRef = useRef<HTMLButtonElement>(null);
  const resizeRafRef = useRef<number | undefined>(undefined);
  const containerTypeRef = useRef<TypeContainerBox>(containerType);
  const breakpointsRef = useRef<{ sm: number; md: number; lg: number }>({ sm: 0, md: 0, lg: 0 });

  // Store
  const mapId = useStoreGeoViewMapId();
  const layerPaths = useStoreLayerTopLevelLayerPaths();

  const memoSxClasses = useMemo(() => {
    logger.logTraceUseMemo('LEGEND - memoSxClasses', theme);
    return getSxClasses(theme);
  }, [theme]);

  // Memoize breakpoint values
  const memoBreakpoints = useMemo(() => {
    // Log
    logger.logTraceUseMemo('LEGEND - breakpoints', theme.breakpoints.values);

    return {
      sm: theme.breakpoints.values.sm,
      md: theme.breakpoints.values.md,
      lg: theme.breakpoints.values.lg,
    };
  }, [theme.breakpoints.values]);

  // Keep latest values available to stable callbacks.
  containerTypeRef.current = containerType;
  breakpointsRef.current = memoBreakpoints;

  // Memoize the list of grouped layer paths for wrapped-column rendering.
  const memoFormattedLegendLayerList = useMemo((): string[][] => {
    logger.logTraceUseMemo('LEGEND - memoFormattedLegendLayerList', layerPaths.length, legendColumnCount);

    if (!layerPaths.length) return [];

    const groupedLayerPaths = Array.from({ length: legendColumnCount }, () => []) as Array<string[]>;
    layerPaths.forEach((layerPath, index) => {
      groupedLayerPaths[index % legendColumnCount].push(layerPath);
    });

    return groupedLayerPaths;
  }, [layerPaths, legendColumnCount]);

  // Memoize the no layers content
  const memoNoLayersContent = useMemo(() => {
    // Log
    logger.logTraceUseMemo('components/legend - noLayersContent');

    return (
      <Box sx={styles.noLayersContainer}>
        <Typography variant="h3" gutterBottom sx={memoSxClasses.legendInstructionsTitle}>
          {t('legend.noLayersAdded')}
        </Typography>
        <Typography component="p" sx={memoSxClasses.legendInstructionsBody}>
          {t('legend.noLayersAddedDescription')}
        </Typography>
      </Box>
    );
  }, [t, memoSxClasses]);

  // Memoize the rendered content based on whether there are legend layers
  const memoContent = useMemo(() => {
    // Log
    logger.logTraceUseMemo('components/legend - content', memoFormattedLegendLayerList.length);

    if (!memoFormattedLegendLayerList.length) {
      return memoNoLayersContent;
    }

    const content = memoFormattedLegendLayerList.map((paths, idx) => (
      <List
        className="legendList"
        // eslint-disable-next-line react/no-array-index-key
        key={`${idx}`}
        sx={{
          width: containerType === CONTAINER_TYPE.APP_BAR ? responsiveWidths.full : responsiveWidths.responsive,
          ...memoSxClasses.legendList,
        }}
      >
        {paths.map((layerPath) => (
          <LegendLayer layerPath={layerPath} key={layerPath} showControls={true} containerType={containerType} />
        ))}
      </List>
    ));

    return content;
  }, [memoFormattedLegendLayerList, memoNoLayersContent, containerType, memoSxClasses]);

  /**
   * Handles opening the fullscreen legend panel.
   */
  const handleOpenFullscreen = useCallback((): void => {
    setIsFullScreen(true);
  }, []);

  /**
   * Handles closing the fullscreen legend panel.
   */
  const handleCloseFullscreen = useCallback((): void => {
    setIsFullScreen(false);
  }, []);

  /**
   * Get the size of list based on window size.
   */
  const getLegendLayerListSize = useCallback(() => {
    if (containerTypeRef.current === CONTAINER_TYPE.APP_BAR) return 1;

    const currentBreakpoints = breakpointsRef.current;

    const { innerWidth } = window;
    if (innerWidth < currentBreakpoints.sm) return 1;
    if (innerWidth < currentBreakpoints.md) return 2;
    if (innerWidth < currentBreakpoints.lg) return 3;
    return 4;
  }, []);

  // Memoize the window resize handler and keep state updates stable when count does not change.
  const handleWindowResize = useCallback(() => {
    if (resizeRafRef.current !== undefined) return;

    resizeRafRef.current = window.requestAnimationFrame(() => {
      resizeRafRef.current = undefined;
      const nextColumnCount = getLegendLayerListSize();
      setLegendColumnCount((prevColumnCount) => (prevColumnCount === nextColumnCount ? prevColumnCount : nextColumnCount));
    });
  }, [getLegendLayerListSize]);

  // Wire a handler using a custom hook on the window resize event
  useEventListener<Window>('resize', handleWindowResize, window);

  // Initialize/update column count when breakpoints or container type change.
  useEffect(() => {
    // Log
    logger.logTraceUseEffect('LEGEND - update column count', containerType, memoBreakpoints);

    const nextColumnCount = getLegendLayerListSize();
    setLegendColumnCount((prevColumnCount) => (prevColumnCount === nextColumnCount ? prevColumnCount : nextColumnCount));
  }, [containerType, memoBreakpoints, getLegendLayerListSize]);

  // Cleanup any pending animation frame from resize handling.
  useEffect(() => {
    return () => {
      if (resizeRafRef.current !== undefined) {
        window.cancelAnimationFrame(resizeRafRef.current);
        resizeRafRef.current = undefined;
      }
    };
  }, []);

  // TODO: CLEANUP - Remove the commented code, we're trying to not unmount the Legend panel anymore to check performance 2026-04-07
  // Early return with empty fragment if not the active tab
  // if (activeFooterBarTab.tabId !== 'legend' && activeAppBarTab.tabId !== 'legend') return null;

  return (
    <>
      {containerType === CONTAINER_TYPE.APP_BAR && (
        <LegendFullscreen
          layerPaths={layerPaths}
          mapId={mapId}
          containerType={containerType}
          isOpen={isFullScreen}
          onClose={handleCloseFullscreen}
          buttonRef={fullScreenBtnRef}
        />
      )}

      <Box sx={memoSxClasses.toggleBar}>
        <ToggleAll containerType={containerType} source="legend" />
        <LegendFullscreenButton containerType={containerType} onClick={handleOpenFullscreen} buttonRef={fullScreenBtnRef} />
      </Box>
      <Box
        sx={{ background: theme.palette.geoViewColor.bgColor.main, ...sxClassesMain.container }}
        id={`${mapId}-${containerType}-legendContainer`}
      >
        <Box sx={styles.flexContainer}>{memoContent}</Box>
      </Box>
    </>
  );
}
