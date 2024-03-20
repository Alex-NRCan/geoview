import { GeoviewStoreType } from '@/core/stores/geoview-store';
import { logger } from '@/core/utils/logger';

import { AbstractEventProcessor } from '../abstract-event-processor';
import {
  EsriDynamic,
  ITimeSliderState,
  TimeSliderLayerSet,
  TypeFeatureInfoLayerConfig,
  WMS,
  api,
  getLocalizedValue,
} from '@/core/types/cgpv-types';
import { CONST_LAYER_TYPES } from '@/geo/layer/geoview-layers/abstract-geoview-layers';
import { AbstractGeoViewVector } from '@/geo/layer/geoview-layers/vector/abstract-geoview-vector';

export class TimeSliderEventProcessor extends AbstractEventProcessor {
  /**
   * Override the initialization process to wire subscriptions and return them so they can be destroyed later.
   */
  protected onInitialize(store: GeoviewStoreType): Array<() => void> | void {
    const { mapId } = store.getState();

    api.event.once(
      api.eventNames.MAP.EVENT_MAP_LOADED,
      () => {
        // Log
        logger.logTraceCoreAPIEvent('TIME SLIDER EVENT PROCESSOR - EVENT_MAP_LOADED');

        const orderedLayers = store.getState().mapState.orderedLayerInfo.map((info) => info.layerPath);
        const initialTimeSliderLayerPaths = TimeSliderEventProcessor.filterTimeSliderLayers(mapId, orderedLayers);
        if (initialTimeSliderLayerPaths) {
          initialTimeSliderLayerPaths.forEach((layerPath) => {
            const timeSliderLayer = TimeSliderEventProcessor.getInitialTimeSliderValues(mapId, layerPath);
            store.getState().timeSliderState.actions.addTimeSliderLayer(timeSliderLayer);

            const { defaultValue, field, filtering, minAndMax, values } = timeSliderLayer[layerPath];
            TimeSliderEventProcessor.applyFilters(mapId, layerPath, defaultValue, field, filtering, minAndMax, values);
          });
        }
      },
      mapId
    );

    // Checks for added and removed layers with time dimension
    const unsubOrderedLayerInfo = store.subscribe(
      (state) => state.mapState.orderedLayerInfo,
      (cur, prev) => {
        // Log
        logger.logTraceCoreStoreSubscription('TIME SLIDER EVENT PROCESSOR - orderedLayerInfo', cur);

        const newTimeSliderLayerPaths = TimeSliderEventProcessor.filterTimeSliderLayers(
          mapId,
          cur.map((info) => info.layerPath)
        );
        const oldTimeSliderLayerPaths = TimeSliderEventProcessor.filterTimeSliderLayers(
          mapId,
          prev.map((info) => info.layerPath)
        );
        const addedLayers = newTimeSliderLayerPaths.filter((layerPath) => !oldTimeSliderLayerPaths.includes(layerPath));
        const removedLayers = oldTimeSliderLayerPaths.filter((layerPath) => !newTimeSliderLayerPaths.includes(layerPath));
        if (addedLayers.length) {
          addedLayers.forEach((layerPath) => {
            const timeSliderLayer = TimeSliderEventProcessor.getInitialTimeSliderValues(mapId, layerPath);
            store.getState().timeSliderState.actions.addTimeSliderLayer(timeSliderLayer);
          });
        }
        if (removedLayers.length)
          removedLayers.forEach((layerPath) => store.getState().timeSliderState.actions.removeTimeSliderLayer(layerPath));
      }
    );

    // Return the array of subscriptions so they can be destroyed later
    return [unsubOrderedLayerInfo];
  }

  // **********************************************************
  // Static functions for Typescript files to access store actions
  // **********************************************************
  //! Typescript MUST always use the defined store actions below to modify store - NEVER use setState!
  //! Some action does state modifications AND map actions.
  //! ALWAYS use map event processor when an action modify store and IS NOT trap by map state event handler

  // #region
  /**
   * Shortcut to get the TimeSlider state for a given map id
   * @param {string} mapId The mapId
   * @returns {ITimeSliderState | undefined} The Time Slider state. Forcing the return to also be 'undefined', because
   *                                         there will be no timeSliderState if the TimeSlider plugin isn't active.
   *                                         This helps the developers making sure the existence is checked.
   */
  protected static getTimesliderState(mapId: string): ITimeSliderState | undefined {
    // Return the time slider state
    return super.getState(mapId).timeSliderState;
  }

  /**
   * Filter array of legend layers to get usable time slider layer paths
   *
   * @param {string} mapId The id of the map
   * @param {TypeLegendLayer[]} legendLayers Array of legend layers to filter
   * @returns {string[]} A list of usable layer paths
   */
  private static filterTimeSliderLayers(mapId: string, layerPaths: string[]): string[] {
    const filteredLayerPaths = layerPaths.filter(
      (layerPath) => api.maps[mapId].layer.geoviewLayers[layerPath.split('/')[0]].layerTemporalDimension[layerPath]
    );
    return filteredLayerPaths;
  }

  /**
   * Get initial values for a layer's time slider states
   *
   * @param {string} mapId The id of the map
   * @param {string} layerPath The path of the layer to add to time slider
   * @returns {TimeSliderLayer}
   */
  static getInitialTimeSliderValues(mapId: string, layerPath: string): TimeSliderLayerSet {
    const layerConfig = api.maps[mapId].layer.registeredLayers[layerPath];
    const name = getLocalizedValue(layerConfig.layerName, mapId) || layerConfig.layerId;
    const temporalDimensionInfo = api.maps[mapId].layer.geoviewLayer(layerPath).getTemporalDimension();
    const { range } = temporalDimensionInfo.range;
    const defaultValueIsArray = Array.isArray(temporalDimensionInfo.default);
    const defaultValue = defaultValueIsArray ? temporalDimensionInfo.default[0] : temporalDimensionInfo.default;
    const minAndMax: number[] = [new Date(range[0]).getTime(), new Date(range[range.length - 1]).getTime()];
    const { field, singleHandle } = temporalDimensionInfo;

    // If the field type has an alias, use that as a label
    let fieldAlias = field;
    const { featureInfo } = api.maps[mapId].layer.registeredLayers[layerPath].source!;
    const { aliasFields, outfields } = featureInfo as TypeFeatureInfoLayerConfig;
    const localizedOutFields = getLocalizedValue(outfields, mapId)?.split(',');
    const localizedAliasFields = getLocalizedValue(aliasFields, mapId)?.split(',');
    const fieldIndex = localizedOutFields ? localizedOutFields.indexOf(field) : -1;
    if (fieldIndex !== -1 && localizedAliasFields?.length === localizedOutFields?.length) fieldAlias = localizedAliasFields![fieldIndex];

    // eslint-disable-next-line no-nested-ternary
    const values = singleHandle
      ? [new Date(temporalDimensionInfo.default).getTime()]
      : defaultValueIsArray
      ? [new Date(temporalDimensionInfo.default[0]).getTime(), new Date(temporalDimensionInfo.default[1]).getTime()]
      : [...minAndMax];

    const sliderData: TimeSliderLayerSet = {
      [layerPath]: {
        name,
        range,
        defaultValue,
        minAndMax,
        field,
        fieldAlias,
        singleHandle,
        filtering: true,
        values,
        delay: 1000,
        locked: undefined,
        reversed: undefined,
      },
    };
    return sliderData;
  }
  // #endregion

  // **********************************************************
  // Static functions for Store Map State to action on API
  // **********************************************************
  //! NEVER add a store action who does set state AND map action at a same time.
  //! Review the action in store state to make sure

  // #region
  /**
   * Filter the layer provided in the layerPath variable according to current states (filtering and values)
   *
   * @param {string} mapId The map to filter
   * @param {string} layerPath The path of the layer to filter
   * @param {string} defaultValue The default value to use if filters are off
   * @param {string} field The field to filter the layer by
   * @param {boolean} filtering Whether the layer should be filtered or returned to default
   * @param {number[]} minAndMax Minimum and maximum values of slider
   * @param {number[]} values Filter values to apply
   * @returns {void}
   */
  static applyFilters(
    mapId: string,
    layerPath: string,
    defaultValue: string,
    field: string,
    filtering: boolean,
    minAndMax: number[],
    values: number[]
  ): void {
    const layerType = api.maps[mapId].layer.geoviewLayer(layerPath).type;
    if (layerType === CONST_LAYER_TYPES.WMS) {
      if (filtering) {
        const newValue = `${new Date(values[0]).toISOString().slice(0, new Date(values[0]).toISOString().length - 5)}Z`;
        const filter = `${field}=date '${newValue}'`;
        (api.maps[mapId].layer.geoviewLayer(layerPath) as WMS).applyViewFilter(filter);
      } else {
        const filter = `${field}=date '${defaultValue}'`;
        (api.maps[mapId].layer.geoviewLayer(layerPath) as WMS).applyViewFilter(filter);
      }
    } else if (filtering) {
      let filter = `${field} >= date '${new Date(values[0]).toISOString()}'`;
      if (values.length > 1) {
        filter += ` and ${field} <= date '${new Date(values[1]).toISOString()}'`;
      }
      (api.maps[mapId].layer.geoviewLayer(layerPath) as AbstractGeoViewVector | EsriDynamic).applyViewFilter(filter);
    } else {
      let filter = `${field} >= date '${new Date(minAndMax[0]).toISOString()}'`;
      if (values.length > 1) {
        filter += `and ${field} <= date '${new Date(minAndMax[1]).toISOString()}'`;
      }
      (api.maps[mapId].layer.geoviewLayer(layerPath) as AbstractGeoViewVector | EsriDynamic).applyViewFilter(filter);
    }
  }
  // #endregion
}