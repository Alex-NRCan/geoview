import { Coordinate } from 'ol/coordinate';
import { FeatureInfoEventProcessor } from '@/api/event-processors/event-processor-children/feature-info-event-processor';
import EventHelper, { EventDelegateBase } from '@/api/events/event-helper';
import { logger } from '@/core/utils/logger';
import { ConfigBaseClass } from '@/core/utils/config/validation-classes/config-base-class';
import { TypeFeatureInfoEntry, TypeLayerStatus, TypeResultSet } from '@/geo/map/map-schema-types';
import { CONST_LAYER_TYPES } from '@/geo/layer/geoview-layers/abstract-geoview-layers';
import { EventType, AbstractLayerSet } from './abstract-layer-set';
import { LayerApi } from '@/geo/layer/layer';
import {
  TypeFeatureInfoResultSet,
  TypeFeatureInfoResultSetEntry,
} from '@/core/stores/store-interface-and-intial-values/feature-info-state';

/**
 * A class containing a set of layers associated with a TypeFeatureInfoResultSetEntry object, which will receive the result of a
 * "get feature info" request made on the map layers when the user click a location on the map.
 *
 * @class FeatureInfoLayerSet
 */
export class FeatureInfoLayerSet extends AbstractLayerSet {
  /** The resultSet object as existing in the base class, retyped here as a TypeFeatureInfoResultSet */
  declare resultSet: TypeFeatureInfoResultSet;

  // Keep all callback delegate references
  #onQueryEndedHandlers: QueryEndedDelegate[] = [];

  /**
   * The class constructor that instanciate a set of layer.
   * @param {LayerApi} layerApi - The layer Api to work with.
   */
  constructor(layerApi: LayerApi) {
    super(layerApi);

    // Register a handler on the map click
    this.layerApi.mapViewer.onMapSingleClick((mapViewer, payload) => {
      // Query all layers which can be queried
      this.queryLayers(payload.lnglat).catch((error) => {
        // Log
        logger.logPromiseFailed('queryLayers in onMapSingleClick in FeatureInfoLayerSet', error);
      });
    });
  }

  /**
   * Propagate to store
   * @param {TypeFeatureInfoResultSetEntry} resultSetEntry - The result entry to propagate
   * @private
   */
  #propagateToStore(resultSetEntry: TypeFeatureInfoResultSetEntry): void {
    FeatureInfoEventProcessor.propagateFeatureInfoToStore(this.getMapId(), 'click', resultSetEntry).catch((error) => {
      // Log
      logger.logPromiseFailed('FeatureInfoEventProcessor.propagateToStore in FeatureInfoLayerSet', error);
    });
  }

  /**
   * Overrides the behavior to apply when a feature-info-layer-set wants to check for condition to register a layer in its set.
   * @param {ConfigBaseClass} layerConfig - The layer config
   * @returns {boolean} True when the layer should be registered to this feature-info-layer-set.
   */
  protected override onRegisterLayerCheck(layerConfig: ConfigBaseClass): boolean {
    // Log
    logger.logTraceCore('FEATURE-INFO-LAYER-SET - onRegisterLayerCheck', layerConfig.layerPath);

    // TODO: Make a util function for this check - this can be done prior to layer creation in config section
    // for some layer type, we know there is no details
    if (
      layerConfig.schemaTag &&
      [CONST_LAYER_TYPES.ESRI_IMAGE, CONST_LAYER_TYPES.IMAGE_STATIC, CONST_LAYER_TYPES.XYZ_TILES, CONST_LAYER_TYPES.VECTOR_TILES].includes(
        layerConfig.schemaTag
      )
    )
      return false;

    // Default
    return super.onRegisterLayerCheck(layerConfig);
  }

  /**
   * Overrides the behavior to apply when a feature-info-layer-set wants to register a layer in its set.
   * @param {ConfigBaseClass} layerConfig - The layer config
   */
  protected override onRegisterLayer(layerConfig: ConfigBaseClass): void {
    // Log
    logger.logTraceCore('FEATURE-INFO-LAYER-SET - onRegisterLayer', layerConfig.layerPath);

    // Call parent
    super.onRegisterLayer(layerConfig);

    // Update the resultSet data
    this.resultSet[layerConfig.layerPath].eventListenerEnabled = true;
    this.resultSet[layerConfig.layerPath].queryStatus = 'processed';
    this.resultSet[layerConfig.layerPath].features = [];

    // Propagate to store on registration
    this.#propagateToStore(this.resultSet[layerConfig.layerPath]);
  }

  /**
   * Overrides the behavior to apply when unregistering a layer from the feature-info-layer-set.
   * @param {ConfigBaseClass} layerConfig - The layer config
   */
  protected override onUnregisterLayer(layerConfig: ConfigBaseClass): void {
    // Log
    logger.logTraceCore('FEATURE-INFO-LAYER-SET - onUnregisterLayer', layerConfig.layerPath);

    // Call parent
    super.onUnregisterLayer(layerConfig);

    // Remove it from feature info array (propagating to the store)
    FeatureInfoEventProcessor.deleteFeatureInfo(this.getMapId(), layerConfig.layerPath);
  }

  /**
   * Overrides the behavior to apply when a layer status changed for a feature-info-layer-set.
   * @param {ConfigBaseClass} layerConfig - The layer config
   * @param {string} layerStatus - The new layer status
   */
  protected override onProcessLayerStatusChanged(layerConfig: ConfigBaseClass, layerStatus: TypeLayerStatus): void {
    // Call parent. After this call, this.resultSet?.[layerPath]?.layerStatus may have changed!
    super.onProcessLayerStatusChanged(layerConfig, layerStatus);

    // Propagate to the store on layer status changed
    this.#propagateToStore(this.resultSet[layerConfig.layerPath]);

    // If the layer is in error
    if (this.resultSet[layerConfig.layerPath].layerStatus === 'error') {
      // Remove it from the store immediately
      this.onUnregisterLayer(layerConfig);
    }
  }

  /**
   * Overrides behaviour when layer name is changed.
   * @param {ConfigBaseClass} layerConfig - The layer path being affected
   * @param {string} name - The new layer name
   */
  protected override onProcessNameChanged(layerConfig: ConfigBaseClass, name: string): void {
    if (this.resultSet?.[layerConfig.layerPath]) {
      // Call parent
      super.onProcessNameChanged(layerConfig, name);

      // Propagate to store
      this.#propagateToStore(this.resultSet[layerConfig.layerPath]);
    }
  }

  /**
   * Emits a query ended event to all handlers.
   * @param {QueryEndedEvent} event - The event to emit
   * @private
   */
  #emitQueryEnded(event: QueryEndedEvent): void {
    // Emit the event for all handlers
    EventHelper.emitEvent(this, this.#onQueryEndedHandlers, event);
  }

  /**
   * Registers a query ended event handler.
   * @param {QueryEndedDelegate} callback - The callback to be executed whenever the event is emitted
   */
  onQueryEnded(callback: QueryEndedDelegate): void {
    // Register the event handler
    EventHelper.onEvent(this.#onQueryEndedHandlers, callback);
  }

  /**
   * Unregisters a query ended event handler.
   * @param {QueryEndedDelegate} callback - The callback to stop being called whenever the event is emitted
   */
  offQueryEnded(callback: QueryEndedDelegate): void {
    // Unregister the event handler
    EventHelper.offEvent(this.#onQueryEndedHandlers, callback);
  }

  /**
   * Queries the features at the provided coordinate for all the registered layers.
   * @param {Coordinate} longLatCoordinate - The longitude/latitude coordinate where to query the features
   * @returns {Promise<TypeFeatureInfoResultSet>} A promise which will hold the result of the query
   */
  async queryLayers(longLatCoordinate: Coordinate): Promise<TypeFeatureInfoResultSet> {
    // TODO: REFACTOR - Watch out for code reentrancy between queries!
    // TO.DOCONT: Consider using a LIFO pattern, per layer path, as the race condition resolution
    // GV Each query should be distinct as far as the resultSet goes! The 'reinitialization' below isn't sufficient.
    // GV As it is (and was like this before events refactor), the this.resultSet is mutating between async calls.

    // Prepare to hold all promises of features in the loop below
    const allPromises: Promise<TypeFeatureInfoEntry[] | undefined | null>[] = [];

    // Query and event types of what we're doing
    const queryType = 'at_long_lat';

    // Reinitialize the resultSet
    // Loop on each layer path in the resultSet
    Object.keys(this.resultSet).forEach((layerPath) => {
      // Get the layer config and layer associated with the layer path
      const layer = this.layerApi.getGeoviewLayerHybrid(layerPath);
      const layerConfig = layer?.getLayerConfig(layerPath);

      if (!this.resultSet[layerPath].eventListenerEnabled) return;
      if (!AbstractLayerSet.isQueryable(layerConfig)) return;

      // If layer is loaded
      if (layer && layerConfig?.layerStatus === 'loaded') {
        this.resultSet[layerPath].features = undefined;
        this.resultSet[layerPath].queryStatus = 'processing';

        // Propagate to store
        this.#propagateToStore(this.resultSet[layerPath]);

        // Process query on results data
        const promiseResult = AbstractLayerSet.queryLayerFeatures(
          this.resultSet[layerPath],
          layerConfig,
          layer,
          queryType,
          longLatCoordinate
        );

        // Add the promise
        allPromises.push(promiseResult);

        // When the promise is done, propagate to store
        promiseResult
          .then((arrayOfRecords) => {
            // Keep the features retrieved
            this.resultSet[layerPath].features = arrayOfRecords;

            // When property features is undefined, we are waiting for the query result.
            // when Array.isArray(features) is true, the features property contains the query result.
            // when property features is null, the query ended with an error.
            this.resultSet[layerPath].queryStatus = arrayOfRecords ? 'processed' : 'error';

            // Propagate to store
            this.#propagateToStore(this.resultSet[layerPath]);
          })
          .catch((error) => {
            // Log
            logger.logPromiseFailed('queryLayerFeatures in queryLayers in FeatureInfoLayerSet', error);
          });
      } else {
        this.resultSet[layerPath].features = null;
        this.resultSet[layerPath].queryStatus = 'error';
      }
    });

    // Await for the promises to settle
    await Promise.allSettled(allPromises);

    // Emit the query layers has ended
    this.#emitQueryEnded({ coordinate: longLatCoordinate, resultSet: this.resultSet, eventType: 'click' });

    // Return the results
    return this.resultSet;
  }

  /**
   * Apply status to item in results set reference by the layer path and propagate to store
   * @param {string} layerPath - The layer path
   * @param {boolean} isEnable - Status to apply
   * @private
   */
  #processListenerStatusChanged(layerPath: string, isEnable: boolean): void {
    this.resultSet[layerPath].eventListenerEnabled = isEnable;
    this.resultSet[layerPath].features = [];
    this.#propagateToStore(this.resultSet[layerPath]);
  }

  /**
   * Function used to enable listening of click events. When a layer path is not provided,
   * click events listening is enabled for all layers
   * @param {string} layerPath - Optional parameter used to enable only one layer
   */
  enableClickListener(layerPath?: string): void {
    if (layerPath) this.#processListenerStatusChanged(layerPath, true);
    else
      Object.keys(this.resultSet).forEach((key: string) => {
        this.#processListenerStatusChanged(key, true);
      });
  }

  /**
   * Function used to disable listening of click events. When a layer path is not provided,
   * click events listening is disable for all layers
   * @param {string} layerPath - Optional parameter used to disable only one layer
   */
  disableClickListener(layerPath?: string): void {
    if (layerPath) this.#processListenerStatusChanged(layerPath, false);
    else
      Object.keys(this.resultSet).forEach((key: string) => {
        this.#processListenerStatusChanged(key, false);
      });
  }

  /**
   * Function used to determine whether click events are disabled for a layer. When a layer path is not provided,
   * the value returned is undefined if the map flags are a mixture of true and false values.
   * @param {string} layerPath - Optional parameter used to get the flag value of a layer.
   * @returns {boolean | undefined} The flag value for the map or layer.
   */
  isClickListenerEnabled(layerPath?: string): boolean | undefined {
    if (layerPath) return !!this.resultSet?.[layerPath]?.eventListenerEnabled;

    let returnValue: boolean | undefined;
    Object.keys(this.resultSet).forEach((key: string, i) => {
      if (i === 0) returnValue = this.resultSet[key].eventListenerEnabled;
      if (returnValue !== this.resultSet[key].eventListenerEnabled) returnValue = undefined;
    });
    return returnValue;
  }
}

/**
 * Define a delegate for the event handler function signature
 */
type QueryEndedDelegate = EventDelegateBase<FeatureInfoLayerSet, QueryEndedEvent>;

/**
 * Define an event for the delegate
 */
export type QueryEndedEvent = {
  coordinate: Coordinate;
  resultSet: TypeResultSet;
  eventType: EventType;
};