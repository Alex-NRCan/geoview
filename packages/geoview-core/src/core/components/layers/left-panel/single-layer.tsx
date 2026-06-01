import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { SxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getSxClasses } from '@/core/components/common/layer-list-style';
import {
  Box,
  Collapse,
  IconButton,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
  ListItem,
  ListItemButton,
  ListItemText,
  ProgressBar,
  Tooltip,
  VisibilityOffOutlinedIcon,
  VisibilityOutlinedIcon,
} from '@/ui';
import {
  useStoreLayerDisplayState,
  useStoreLayerIsSelected,
  useStoreLayerHasSelectedDescendant,
  useStoreLayerName,
  useStoreLayerId,
  useStoreLayerStatus,
  useStoreLayerEntryType,
  useStoreLayerControls,
  useStoreLayerChildPaths,
  useStoreLayerItems,
  useStoreLayerHasDisabledVisibility,
  useStoreLayerVisible,
  useStoreLayerInVisibleRange,
  useStoreLayerIsParentHiddenOnMap,
  useStoreLayerLegendCollapsed,
} from '@/core/stores/states/layer-state';
import { DeleteUndoButton } from '@/core/components/layers/delete-undo-button';
import { LayersList } from './layers-list';
import { LayerIcon } from '@/core/components/common/layer-icon';
import { logger } from '@/core/utils/logger';
import { ArrowDownwardIcon, ArrowUpIcon, CenterFocusScaleIcon, LoopIcon } from '@/ui/icons';
import { Divider } from '@/ui/divider/divider';
import { useStoreGeoViewMapId } from '@/core/stores/geoview-store';
import { scrollListItemIntoView } from '@/core/utils/utilities';
import { TIMEOUT, TABS } from '@/core/utils/constant';
import type { TypeContainerBox } from '@/core/types/global-types';
import { useStoreUIActiveTrapGeoView } from '@/core/stores/states/ui-state';
import { useLayerController, useLayerCreatorController } from '@/core/controllers/use-controllers';

/** Static Tooltip slotProps — offset popper by [0, -8]. */
const TOOLTIP_SLOT_PROPS = {
  popper: {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, -8],
        },
      },
    ],
  },
};

interface SingleLayerProps {
  layerPath: string;
  depth: number;
  showLayerDetailsPanel: (layerId: string) => void;
  isFirst: boolean;
  isLast: boolean;
  isLayoutEnlarged: boolean;
  containerType: TypeContainerBox;
}

/**
 * Creates a single layer list item with controls and nested children.
 *
 * @param props - Properties defined in SingleLayerProps interface
 * @returns The single layer list item element
 */

export function SingleLayer({
  depth,
  layerPath,
  showLayerDetailsPanel,
  isFirst,
  isLast,
  isLayoutEnlarged,
  containerType,
}: SingleLayerProps): JSX.Element {
  // Log
  logger.logTraceRender('components/layers/left-panel/single-layer', layerPath);

  // Hook
  const { t } = useTranslation<string>();
  const theme = useTheme();
  const memoSxClasses = useMemo(() => {
    logger.logTraceUseMemo('SINGLE-LAYER - memoSxClasses', theme);
    return getSxClasses(theme);
  }, [theme]);

  // Create ref for scrolling into view
  const layerListItemRef = useRef<HTMLLIElement>(null);

  // Ref to track if a reload has been requested
  const reloadRequestedRef = useRef<boolean>(false);
  const layerIsSelectedRef = useRef<boolean>(false);
  const layerStatusRef = useRef<string | undefined>(undefined);
  const layerIdRef = useRef<string | undefined>(undefined);
  const showLayerDetailsPanelRef = useRef<(layerId: string) => void>(() => undefined);
  const layerControllerRef = useRef<ReturnType<typeof useLayerController> | undefined>(undefined);
  const layerCreatorControllerRef = useRef<ReturnType<typeof useLayerCreatorController> | undefined>(undefined);
  const isFirstRef = useRef<boolean>(false);
  const isLastRef = useRef<boolean>(false);
  const inVisibleRangeRef = useRef<boolean | undefined>(undefined);
  const parentHiddenRef = useRef<boolean>(false);
  const isZoomToVisibleScaleCapableRef = useRef<boolean>(false);

  // Internal state - WCAG accessibility for screen reader announcements
  const prevStatusRef = useRef<string | undefined>(undefined);
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Get store states
  const mapId = useStoreGeoViewMapId();
  const displayState = useStoreLayerDisplayState();
  const layerIsSelected = useStoreLayerIsSelected(layerPath);
  const isKeyboardNavigationMode = useStoreUIActiveTrapGeoView();

  const isVisible = useStoreLayerVisible(layerPath);
  const inVisibleRange = useStoreLayerInVisibleRange(layerPath);
  const legendExpanded = !useStoreLayerLegendCollapsed(layerPath);
  const parentHidden = useStoreLayerIsParentHiddenOnMap(layerPath);

  const layerId = useStoreLayerId(layerPath);
  const layerName = useStoreLayerName(layerPath);
  const layerStatus = useStoreLayerStatus(layerPath);
  const layerEntryType = useStoreLayerEntryType(layerPath);
  const layerControls = useStoreLayerControls(layerPath);
  const layerChildPaths = useStoreLayerChildPaths(layerPath);
  const layerItems = useStoreLayerItems(layerPath);
  const layerController = useLayerController();
  const layerCreatorController = useLayerCreatorController();

  // Ref to track previous selection state to distinguish initial render from user action
  const prevIsSelectedRef = useRef<boolean>(layerIsSelected);

  // Keep latest values available to stable callbacks.
  layerIsSelectedRef.current = layerIsSelected;
  layerStatusRef.current = layerStatus;
  layerIdRef.current = layerId;
  showLayerDetailsPanelRef.current = showLayerDetailsPanel;
  layerControllerRef.current = layerController;
  layerCreatorControllerRef.current = layerCreatorController;
  isFirstRef.current = isFirst;
  isLastRef.current = isLast;
  inVisibleRangeRef.current = inVisibleRange;
  parentHiddenRef.current = parentHidden;

  // Check if any descendant layer is selected.
  const layerChildIsSelected = useStoreLayerHasSelectedDescendant(layerPath);

  // Check if any layer in the subtree has visibility disabled
  const isLayerAlwaysVisible = useStoreLayerHasDisabledVisibility(layerPath);

  const itemsCount = layerItems?.filter((d) => d.isVisible !== false).length || 0;
  const itemsTotalCount = layerItems?.length || 0;

  // Build unique ID format
  const panelCloseButtonId = `${mapId}-${containerType}-${TABS.LAYERS}-panel-close-btn`;
  const layerListItemButtonId = `${mapId}-${containerType}-${TABS.LAYERS}-${layerPath}`;
  const reloadButtonId = `${mapId}-${containerType}-${layerPath}-reload-btn`;
  const orderUpButtonId = `${mapId}-${containerType}-${layerPath}-up-order-btn`;
  const orderDownButtonId = `${mapId}-${containerType}-${layerPath}-down-order-btn`;

  // Is zoom to visible scale button visible?
  const isZoomToVisibleScaleCapable = !inVisibleRange && layerEntryType !== 'group';
  const isZoomToVisibleScaleButton = layerControls?.visibleScale ?? false;
  isZoomToVisibleScaleCapableRef.current = isZoomToVisibleScaleCapable;

  // State to track if delete button should show for loading layers
  const [showDeleteOnLoading, setShowDeleteOnLoading] = useState(false);

  // State to track if the layer item has focus within for accessibility purposes
  const [hasFocusWithin, setHasFocusWithin] = useState(false);

  // Is visibility button disabled?
  const isLayerVisibleCapable = layerControls?.visibility;

  const containerClassItems: string[] = ['layer-panel ', layerStatus ?? ''];

  if (depth === 0) {
    containerClassItems.push('bordered');
  }

  // if layer has selected child but its not itself selected
  if (layerChildIsSelected && !layerIsSelected && !legendExpanded) {
    containerClassItems.push('selectedLayer bordered-primary');
  }

  if (layerIsSelected) {
    containerClassItems.push('selectedLayer bordered-primary');
  }

  const containerClass = containerClassItems.join(' ');

  const listItemButtonSx = {
    minHeight: '4.51rem',
    ...(!inVisibleRange || parentHidden || !isVisible || layerStatus === 'error' ? memoSxClasses.outOfRange : {}),
  };

  // Timer to show delete button after a delay for loading/processing layers so user can remove them to enable collapse/show all
  useEffect(() => {
    logger.logTraceUseEffect('SINGLE-LAYER - show delete button timer', layerStatus);

    if (layerStatus && ['newInstance', 'registered', 'processing', 'loading'].includes(layerStatus)) {
      const timer = setTimeout(() => {
        setShowDeleteOnLoading((prev) => (prev ? prev : true));
      }, TIMEOUT.deleteLayerLoading);

      return () => {
        clearTimeout(timer);
        setShowDeleteOnLoading((prev) => (prev ? false : prev));
      };
    }
    setShowDeleteOnLoading((prev) => (prev ? false : prev));
    return undefined;
  }, [layerStatus]);

  // Scroll this list item into view if selected
  useEffect(() => {
    logger.logTraceUseEffect('SINGLE-LAYER - scroll list item into view', layerIsSelected);

    if (layerIsSelected && layerListItemRef.current) {
      scrollListItemIntoView(layerListItemRef.current);
    }
  }, [layerIsSelected]);

  // #region Handlers

  /**
   * Blurs any focused button element that is not within this layer.
   */
  const blurOtherLayerButtons = useCallback((): void => {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && activeElement.tagName === 'BUTTON' && !layerListItemRef.current?.contains(activeElement)) {
      activeElement.blur();
    }
  }, []);

  /**
   * Selects the layer if not already selected and status is valid.
   *
   * @param openPanel - Optional parameter to open the details panel (default: true)
   */
  const selectLayerIfNeeded = useCallback(
    (openPanel = true): void => {
      const currentLayerStatus = layerStatusRef.current;

      if (layerIsSelectedRef.current || !currentLayerStatus || !['processed', 'loaded'].includes(currentLayerStatus)) return;

      layerControllerRef.current?.setSelectedLayerPath(layerPath);
      if (openPanel) {
        showLayerDetailsPanelRef.current?.(layerIdRef.current || '');
      }
    },
    [layerPath]
  );

  /**
   * Handles expand/shrink of layer groups.
   */
  const handleExpandGroupClick = useCallback((): void => {
    // Blur focused buttons on other layers
    blurOtherLayerButtons();

    // Select the layer if not already selected
    selectLayerIfNeeded();

    // Set legend collapse value
    layerControllerRef.current?.toggleLegendCollapsed(layerPath);
  }, [layerPath, selectLayerIfNeeded, blurOtherLayerButtons]);

  /**
   * Handles keyboard events for expand/shrink of layer groups.
   */
  const handleExpandGroupKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>): void => {
      if (event.key === 'Enter' || event.key === ' ') {
        // Blur focused buttons on other layers
        blurOtherLayerButtons();

        // Select the layer if not already selected
        selectLayerIfNeeded(false);

        // Set legend collapse value
        layerControllerRef.current?.toggleLegendCollapsed(layerPath);

        // Prevent double-firing via native button click event
        event.preventDefault();
      }
    },
    [layerPath, blurOtherLayerButtons, selectLayerIfNeeded]
  );

  /**
   * Handles clicking on the layer list item.
   */
  const handleLayerClick = useCallback((): void => {
    // Only clickable if the layer status is processed or loaded
    const currentLayerStatus = layerStatusRef.current;
    if (!currentLayerStatus || !['processed', 'loaded'].includes(currentLayerStatus)) {
      return;
    }

    // Blur focused buttons on other layers
    blurOtherLayerButtons();

    // Set selected layer path
    layerControllerRef.current?.setSelectedLayerPath(layerPath);
    showLayerDetailsPanelRef.current?.(layerIdRef.current || '');
  }, [layerPath, blurOtherLayerButtons]);

  /**
   * Handles clicking on the reorder arrow buttons.
   */
  const handleArrowClick = useCallback(
    (direction: number): void => {
      // Select the layer if not already selected
      selectLayerIfNeeded();

      // Reorder
      layerControllerRef.current?.reorderLayer(layerPath, direction);

      // Scroll into view after DOM updates (scrollListItemIntoView utility does not work well for this)
      requestAnimationFrame(() => {
        layerListItemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      });
    },
    [layerPath, selectLayerIfNeeded]
  );

  const handleArrowKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, direction: number) => {
      if (event.key === 'Enter' || event.key === ' ') {
        // Select the layer if not already selected
        selectLayerIfNeeded(false);

        // Reorder
        layerControllerRef.current?.reorderLayer(layerPath, direction);

        // Prevent double-firing via native button click event
        event.preventDefault();

        // Scroll into view after DOM updates (scrollListItemIntoView utility does not work well for this)
        requestAnimationFrame(() => {
          layerListItemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        });
      }
    },
    [layerPath, selectLayerIfNeeded]
  );

  const handleArrowKeyDownWrapper = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      // Determine direction from button id
      const direction = event.currentTarget.id.includes('up-order') ? -1 : 1;

      // Determine if button is disabled based on position
      const isDisabled = direction === -1 ? isFirstRef.current : isLastRef.current;

      // Prevent activation if disabled (but allow navigation keys like Tab)
      if (isDisabled && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        return;
      }

      handleArrowKeyDown(event, direction);
    },
    [handleArrowKeyDown]
  );

  const handleArrowClickWrapper = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // Determine direction from button id
      const direction = event.currentTarget.id.includes('up-order') ? -1 : 1;

      // Determine if button is disabled based on position
      const isDisabled = direction === -1 ? isFirstRef.current : isLastRef.current;

      // Prevent action if disabled
      if (isDisabled) {
        event.preventDefault();
        return;
      }

      handleArrowClick(direction);
    },
    [handleArrowClick]
  );

  const handleToggleVisibility = useCallback((): void => {
    // Early return if button is disabled
    if (!inVisibleRangeRef.current || parentHiddenRef.current) {
      return;
    }
    // Select the layer if not already selected
    selectLayerIfNeeded();

    // Toggle visibility
    layerControllerRef.current?.setOrToggleLayerVisibility(layerPath);
  }, [layerPath, selectLayerIfNeeded]);

  /**
   * Handles keyboard events for toggling layer visibility.
   */
  const handleToggleVisibilityKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>): void => {
      // Only handle Enter and Space keys
      if (event.key === 'Enter' || event.key === ' ') {
        // Prevent activation if disabled (but allow navigation keys like Tab)
        if (!inVisibleRangeRef.current || parentHiddenRef.current) {
          event.preventDefault();
          return;
        }

        // Select the layer if not already selected
        selectLayerIfNeeded(false);

        // Toggle visibility
        layerControllerRef.current?.setOrToggleLayerVisibility(layerPath);

        // Prevent double-firing via native button click event
        event.preventDefault();
      }
    },
    [layerPath, selectLayerIfNeeded]
  );

  const handleZoomToLayerVisibleScale = useCallback((): void => {
    // Return early if button is disabled
    if (!isZoomToVisibleScaleCapableRef.current) {
      return;
    }

    // Select the layer if not already selected
    selectLayerIfNeeded();

    // Zoom to visible scale
    layerControllerRef.current?.zoomToLayerVisibleScale(layerPath);
  }, [layerPath, selectLayerIfNeeded]);

  /**
   * Handles keyboard events for zooming to the layer's visible scale.
   */
  const handleZoomToLayerVisibleScaleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>): void => {
      if (event.key === 'Enter' || event.key === ' ') {
        // Guard: prevent activation if disabled (but allow navigation keys like Tab)
        if (!isZoomToVisibleScaleCapableRef.current) {
          event.preventDefault();
          return;
        }

        // Select the layer if not already selected
        selectLayerIfNeeded(false);

        // Zoom to visible scale
        layerControllerRef.current?.zoomToLayerVisibleScale(layerPath);

        // Prevent double-firing via native button click event
        event.preventDefault();
      }
    },
    [layerPath, selectLayerIfNeeded]
  );

  const handleReload = useCallback((): void => {
    // Select the layer if not already selected
    selectLayerIfNeeded();

    // Reload layer
    layerCreatorControllerRef.current?.reloadLayer(layerPath);
  }, [layerPath, selectLayerIfNeeded]);

  /**
   * Handles keyboard events for reloading the layer.
   */
  const handleReloadKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>): void => {
      if (event.key === 'Enter' || event.key === ' ') {
        // Select the layer if not already selected
        selectLayerIfNeeded(false);

        // Set ref to indicate a reload has been requested so focus can be set to the reload button after status updates
        reloadRequestedRef.current = true;

        // Reload layer
        layerCreatorControllerRef.current?.reloadLayer(layerPath);

        // Prevent double-firing via native button click event
        event.preventDefault();
      }
    },
    [layerPath, selectLayerIfNeeded]
  );

  // Handlers for keyboard navigation of the sorting arrows and action buttons for accessibility
  const handleFocusWithin = useCallback((): void => {
    setHasFocusWithin((prev) => (prev ? prev : true));
  }, []);

  /**
   * Handles focus leaving the layer item.
   */
  const handleBlurWithin = useCallback((event: React.FocusEvent<HTMLElement>): void => {
    // Only blur if focus moved outside this layer item
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setHasFocusWithin((prev) => (prev ? false : prev));
    }
  }, []);

  // #endregion Handlers

  /**
   * Computes the layer description text.
   */
  const memoLayerDescription = useMemo((): string => {
    // Log
    logger.logTraceUseMemo('SINGLE-LAYER - memoLayerDescription', layerPath, layerStatus);

    if (layerStatus === 'error') {
      return t('legend.layerError');
    }

    if (layerStatus === 'registered') {
      return t('legend.layerRegister');
    }

    if (parentHidden) return t('layers.parentHidden');

    if (layerChildPaths && layerChildPaths.length > 0) {
      return t('legend.subLayersCount', { count: layerChildPaths.length });
    }

    let itemsLengthDesc = t('legend.itemsCount', { count: itemsCount, totalCount: itemsTotalCount });

    if (itemsTotalCount <= 1) {
      itemsLengthDesc = '';
    }

    return itemsLengthDesc;
  }, [layerPath, layerStatus, parentHidden, t, layerChildPaths, itemsCount, itemsTotalCount]);

  /**
   * Renders the edit mode buttons (reorder arrows).
   */
  const memoEditModeButtons = useMemo((): JSX.Element | null => {
    // Log
    logger.logTraceUseMemo('SINGLE-LAYER - memoEditModeButtons', layerPath);

    // Only show arrow buttons when this specific layer is selected
    // Do not show when only a child is selected
    if ((layerIsSelected || (hasFocusWithin && isKeyboardNavigationMode)) && displayState === 'view') {
      return (
        <>
          <IconButton
            className="buttonOutline"
            id={orderUpButtonId}
            edge="end"
            size="small"
            onKeyDown={handleArrowKeyDownWrapper}
            onClick={handleArrowClickWrapper}
            sx={isFirst ? memoSxClasses.orderButtonDisabled : memoSxClasses.orderButtonEnabled}
            aria-label={t('layers.moveLayerUp')}
            aria-disabled={isFirst} // WCAG - used instead of disabled to allow button retain focus and be discoverable by screen readers
          >
            <ArrowUpIcon />
          </IconButton>
          <IconButton
            className="buttonOutline"
            id={orderDownButtonId}
            edge="end"
            size="small"
            onKeyDown={handleArrowKeyDownWrapper}
            onClick={handleArrowClickWrapper}
            sx={isLast ? memoSxClasses.orderButtonDisabled : memoSxClasses.orderButtonEnabled}
            aria-label={t('layers.moveLayerDown')}
            aria-disabled={isLast} // WCAG - used instead of disabled to allow button retain focus and be discoverable by screen readers
          >
            <ArrowDownwardIcon />
          </IconButton>
          <Divider orientation="vertical" sx={memoSxClasses.dividerVertical} variant="middle" flexItem />
        </>
      );
    }
    return null;
  }, [
    layerIsSelected,
    displayState,
    handleArrowClickWrapper,
    handleArrowKeyDownWrapper,
    isFirst,
    isLast,
    layerPath,
    t,
    memoSxClasses.orderButtonDisabled,
    memoSxClasses.orderButtonEnabled,
    memoSxClasses.dividerVertical,
    hasFocusWithin,
    orderDownButtonId,
    orderUpButtonId,
    isKeyboardNavigationMode,
  ]);

  /**
   * Renders the additional layer action buttons.
   */
  const memoMoreLayerButtons = useMemo((): JSX.Element | null => {
    // Log
    logger.logTraceUseMemo('SINGLE-LAYER - memoMoreLayerButtons', layerPath);

    if (showDeleteOnLoading && displayState === 'view') {
      // Show delete button after 5 seconds for loading layers
      if (showDeleteOnLoading) {
        return (
          <DeleteUndoButton
            layerPath={layerPath}
            layerRemovable={layerControls?.remove !== false}
            focusTargetIdAfterDelete={panelCloseButtonId}
          />
        );
      }
      return null;
    }
    if (displayState !== 'view') {
      return null;
    }
    if (layerStatus === 'error') {
      return (
        <>
          <IconButton
            id={reloadButtonId}
            edge="end"
            size="small"
            className="buttonOutline"
            onClick={handleReload}
            onKeyDown={handleReloadKeyDown}
            aria-label={layerChildPaths && layerChildPaths.length > 0 ? t('layers.reloadSublayers') : t('layers.reloadLayer')}
          >
            <LoopIcon />
          </IconButton>
          <DeleteUndoButton
            layerPath={layerPath}
            layerRemovable={layerControls?.remove !== false}
            focusTargetIdAfterDelete={panelCloseButtonId}
          />
        </>
      );
    }

    if (isLayerAlwaysVisible) {
      if (isLayerVisibleCapable) {
        return (
          <IconButton
            edge="end"
            size="small"
            className="buttonOutline"
            aria-disabled={!inVisibleRange} // WCAG - used instead of disabled to allow button to be discoverable by screen readers
            aria-label={t('layers.visibilityIsAlways')}
          >
            <VisibilityOutlinedIcon color="disabled" />
          </IconButton>
        );
      }
      return <Box />;
    }

    return (
      <>
        {isZoomToVisibleScaleButton && (
          <IconButton
            edge="end"
            size="small"
            sx={memoSxClasses.zoomButton}
            className="buttonOutline"
            onClick={handleZoomToLayerVisibleScale}
            onKeyDown={handleZoomToLayerVisibleScaleKeyDown}
            aria-label={t('layers.zoomVisibleScale')}
            aria-disabled={!isZoomToVisibleScaleCapable} // WCAG - used instead of disabled to allow button to be discoverable by screen readers
          >
            <CenterFocusScaleIcon />
          </IconButton>
        )}
        {isLayerVisibleCapable && (
          <IconButton
            edge={inVisibleRange ? false : 'end'}
            size="small"
            onClick={handleToggleVisibility}
            onKeyDown={handleToggleVisibilityKeyDown}
            className="buttonOutline"
            tooltip={t('layers.toggleVisibility')}
            aria-disabled={!inVisibleRange || parentHidden} // WCAG - used instead of disabled to allow button to be discoverable by screen readers
            aria-label={`${t('layers.toggleVisibility')} - ${layerName}`} // WCAG - Provide descriptive aria-label for screen readers
            aria-pressed={isVisible}
          >
            {isVisible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
          </IconButton>
        )}
      </>
    );
  }, [
    layerName,
    layerPath,
    layerStatus,
    displayState,
    showDeleteOnLoading,
    layerControls?.remove,
    isLayerAlwaysVisible,
    inVisibleRange,
    isZoomToVisibleScaleCapable,
    isZoomToVisibleScaleButton,
    t,
    handleZoomToLayerVisibleScale,
    handleZoomToLayerVisibleScaleKeyDown,
    isLayerVisibleCapable,
    handleToggleVisibility,
    handleToggleVisibilityKeyDown,
    isVisible,
    layerChildPaths,
    handleReload,
    handleReloadKeyDown,
    parentHidden,
    reloadButtonId,
    panelCloseButtonId,
    memoSxClasses.zoomButton,
  ]);

  /**
   * Renders the expand/collapse arrow button.
   */
  const memoArrowButtons = useMemo((): JSX.Element | null => {
    // Log
    logger.logTraceUseMemo('SINGLE-LAYER - memoArrowButtons');

    if (layerChildPaths?.length) {
      return (
        <IconButton
          color="primary"
          edge="end"
          size="small"
          onClick={handleExpandGroupClick}
          onKeyDown={handleExpandGroupKeyDown}
          aria-label={t('layers.toggleCollapse')}
          className="buttonOutline"
        >
          {legendExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      );
    }

    return null;
  }, [handleExpandGroupClick, handleExpandGroupKeyDown, layerChildPaths?.length, legendExpanded, t]);

  /**
   * Renders the collapsible child layers list.
   */
  const memoCollapse = useMemo((): JSX.Element | null => {
    // Log
    logger.logTraceUseMemo('SINGLE-LAYER - memoCollapse', layerChildPaths);

    if (!layerChildPaths?.length) {
      return null;
    }

    return (
      <Collapse in={legendExpanded} timeout="auto">
        <LayersList
          depth={1 + depth}
          layerPaths={layerChildPaths}
          isLayoutEnlarged={isLayoutEnlarged}
          showLayerDetailsPanel={showLayerDetailsPanel}
          containerType={containerType}
        />
      </Collapse>
    );
  }, [depth, isLayoutEnlarged, layerChildPaths, legendExpanded, showLayerDetailsPanel, containerType]);

  /**
   * Computes the CSS class names for the layer container.
   */
  const memoContainerClass = useMemo((): string => {
    // Log
    logger.logTraceUseMemo('SINGLE-LAYER - memoContainerClass');

    const result: string[] = ['layer-panel ', layerStatus ?? ''];

    if (depth === 0) {
      result.push('bordered');
    }

    // if layer has selected child but its not itself selected
    if (layerChildIsSelected && !layerIsSelected && !legendExpanded) {
      result.push('selectedLayer bordered-primary');
    }

    if (layerIsSelected) {
      result.push('selectedLayer bordered-primary');
    }

    return result.join(' ');
  }, [depth, layerStatus, layerChildIsSelected, layerIsSelected, legendExpanded]);

  useEffect(() => {
    // Log
    logger.logTraceUseEffect('SINGLE-LAYER - layerIsSelected', layerIsSelected);

    const prevIsSelected = prevIsSelectedRef.current;
    prevIsSelectedRef.current = layerIsSelected;

    // Only scroll into view on user-triggered selection (!prevIsSelected && layerIsSelected)
    // NOT on initial render when layer is already selected via config
    // This preserves the host page's natural tab order until GeoView is interacted with
    if (!prevIsSelected && layerIsSelected) {
      layerListItemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  }, [layerIsSelected]);

  useEffect(() => {
    // Log
    logger.logTraceUseEffect('SINGLE-LAYER - restore focus after reload');

    if (reloadRequestedRef.current === true) {
      if (layerStatus === 'loaded') {
        // Successful reload - focus the main layer button
        requestAnimationFrame(() => {
          document.getElementById(layerListItemButtonId)?.focus();
          reloadRequestedRef.current = false;
        });
      } else if (layerStatus === 'error') {
        // Failed reload - focus the reload button for retry
        requestAnimationFrame(() => {
          document.getElementById(reloadButtonId)?.focus();
          reloadRequestedRef.current = false;
        });
      }
    }
  }, [layerStatus, reloadButtonId, layerListItemButtonId]);

  /**
   * WCAG  - Tracks layer status changes for screen reader announcements.
   */
  useEffect(() => {
    logger.logTraceUseEffect('SINGLE-LAYER - WCAG track layer status changes', layerStatus);

    // Helper to check if previous state was an in-progress state (loading or processing).
    // Both states indicate the layer is being loaded, so completion/error announcements
    // should trigger from either state to ensure screen readers don't miss status changes.
    const prevStateWasInProgress = prevStatusRef.current === 'loading' || prevStatusRef.current === 'processing';

    if (layerStatus === 'loading' && prevStatusRef.current !== 'loading') {
      // Announce when loading starts
      setStatusMessage(t('layers.status.layerLoadingDescriptive', { layerName }) || '');
      prevStatusRef.current = layerStatus;
    } else if (layerStatus === 'processing' && prevStatusRef.current !== 'processing') {
      // Announce when processing starts (distinct phase after initial load)
      setStatusMessage(t('layers.status.layerProcessingDescriptive', { layerName }) || '');
      prevStatusRef.current = layerStatus;
    } else if (layerStatus === 'loaded' && prevStateWasInProgress) {
      // Announce when layer completes successfully from any in-progress state (loading or processing).
      // This ensures transitions like processing→loaded are announced, not just loading→loaded.
      setStatusMessage(t('layers.status.layerLoadedDescriptive', { layerName }) || '');
      prevStatusRef.current = layerStatus;
    } else if (layerStatus === 'error' && prevStateWasInProgress) {
      // Announce when layer fails from any in-progress state (loading or processing).
      // This ensures transitions like processing→error are announced, not just loading→error.
      setStatusMessage(t('layers.status.layerErrorDescriptive', { layerName }) || '');
      prevStatusRef.current = layerStatus;
    } else {
      // Update ref for any other status changes (no announcement needed)
      prevStatusRef.current = layerStatus;
    }
  }, [layerStatus, layerName, t]);

  /**
   * Computes the sx styles for the list item button.
   */
  const memoListItemButtonSx = useMemo((): SxProps => {
    // Log
    logger.logTraceUseMemo('SINGLE-LAYER - memoListItemButtonSx', inVisibleRange, parentHidden, isVisible, layerStatus);

    return [
      { minHeight: '4.51rem' },
      (!inVisibleRange || parentHidden || !isVisible || layerStatus === 'error') && memoSxClasses.outOfRange,
    ] as SxProps;
  }, [inVisibleRange, parentHidden, isVisible, layerStatus, memoSxClasses.outOfRange]);

  return (
    <ListItem
      ref={layerListItemRef}
      className={containerClass}
      key={layerPath}
      disablePadding={true}
      data-layer-depth={depth}
      onFocusCapture={handleFocusWithin}
      onBlurCapture={handleBlurWithin}
    >
      <Box sx={memoSxClasses.containerBox}>
        {/* WCAG - ARIA live region for screen reader announcements */}
        <Box sx={memoSxClasses.visuallyHidden} role="status" aria-live="polite" aria-atomic="true">
          {statusMessage}
        </Box>
        <Tooltip
          title={t('layers.selectLayer', { layerName })}
          placement="top"
          enterDelay={theme.transitions.duration.tooltipDelay}
          enterNextDelay={theme.transitions.duration.tooltipDelay}
          arrow
          slotProps={TOOLTIP_SLOT_PROPS}
        >
          <ListItemButton
            id={layerListItemButtonId}
            onClick={handleLayerClick}
            selected={layerIsSelected || (layerChildIsSelected && !legendExpanded)}
            sx={listItemButtonSx}
            className={!inVisibleRange ? 'out-of-range' : ''}
            aria-current={layerIsSelected ? true : undefined}
          >
            <LayerIcon layerPath={layerPath} />
            <ListItemText primary={layerName !== undefined ? layerName : layerId} secondary={memoLayerDescription} />
          </ListItemButton>
        </Tooltip>
        {!isLayoutEnlarged && (
          <Box className="rightIcons-container" role="group" aria-label={t('layers.layerControls')}>
            {memoEditModeButtons}
            {memoMoreLayerButtons}
            {memoArrowButtons}
          </Box>
        )}
        {layerStatus === 'loading' && (
          <Box sx={memoSxClasses.progressBarSingleLayer}>
            <ProgressBar aria-label={t('layers.status.layerLoadingDescriptive', { layerName })} />
          </Box>
        )}
      </Box>
      {memoCollapse}
    </ListItem>
  );
}
