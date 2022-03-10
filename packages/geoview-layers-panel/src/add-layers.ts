import {
  TypeJSONObject,
  TypeFieldNameAlias,
  TypeJSONValue,
  TypeLayerData,
  TypeLayerInfo,
  TypeApi,
} from "geoview-core";

/**
 * Fetch the json response from the map server
 *
 * @param {string} url the url of the map server
 * @returns {Promise<TypeLayerInfo>} a json containing the result of the query
 */
const queryServer = async (url: string): Promise<TypeLayerInfo> => {
  const response = await fetch(`${url}?f=json`);
  const result = await response.json();
  return result;
};

/**
 * Get all aliases from the defined layer list, will be used when displaying entry / feature info
 *
 * @param {TypeFieldNameAlias[]} fields a list of the fields defined in the layer
 * @returns {TypeJSONObject} an object containing field name and it's alias
 */
const getFieldAliases = (fields: TypeFieldNameAlias[]) => {
  const fieldAliases: TypeJSONObject = {};
  if (fields) {
    fields.forEach((field: { name: string; alias: string }) => {
      const { name, alias } = field;
      fieldAliases[name] = alias;
    });
  }
  return fieldAliases;
};

/**
 * Adds a single layer to it's parent setState function
 *
 * @param setState React setState function
 * @param layerData layer configuration information
 * @param layerInfo additional layer metadata fetched from URL
 * @param isGroupLayer flag to specify if ESRI Dynamic layer is a group
 */
const addLayer = (
  setState: Function,
  layerData: TypeLayerData,
  layerInfo: TypeLayerInfo,
  isGroupLayer: boolean
) => {
  const { layers } = layerData;
  layers[
    `${layerInfo.id}-${layerInfo.name.replace(/\s+/g, "-").toLowerCase()}`
  ] = {
    layer: layerInfo,
    groupLayer: isGroupLayer,
    layerData: [] as TypeJSONValue[],
    displayField: layerInfo.displayField || layerInfo.displayFieldName || "",
    fieldAliases: getFieldAliases(layerInfo.fields),
    renderer: layerInfo.drawingInfo && layerInfo.drawingInfo.renderer,
  };
  layerData.layers = layers;
  setState((state: Record<string, TypeLayerData>) => {
    return {
      ...state,
      [layerData.id]: layerData,
    };
  });
};

/**
 * Fetches metadata for layer based on type
 *
 * @param mapLayer layer configuration information
 * @param setState React setState function
 */
const addMapLayer = async (mapLayer: any, setState: Function) => {
  const layerData = {
    id: mapLayer.id,
    name: mapLayer.name,
    type: mapLayer.type,
    layer: mapLayer.layer || {},
    layers: {},
  };
  if (mapLayer.type === "ogcWMS") {
    for (const layerId of mapLayer.entries) {
      const layerInfo = await queryServer(
        mapLayer.mapService.options.url + layerId
      );
      const legendImageUrl = `${mapLayer.url}?request=GetLegendGraphic&version=1.0.0&Service=WMS&format=image/png&layer=${layerId}`;
      if (
        layerInfo.drawingInfo &&
        layerInfo.drawingInfo.renderer &&
        layerInfo.drawingInfo.renderer.symbol
      ) {
        Object.defineProperties(layerInfo.drawingInfo.renderer.symbol, {
          legendImageUrl: {
            value: legendImageUrl,
          },
        });
      }
      addLayer(setState, layerData, layerInfo, false);
    }
  } else if (mapLayer.type === "esriFeature") {
    const layerInfo = await queryServer(mapLayer.layer.options.url);
    addLayer(setState, layerData, layerInfo, false);
  } else if (mapLayer.type === "esriDynamic") {
    const entries = mapLayer.layer.getLayers();
    mapLayer.layer.metadata(
      async (
        error: any,
        res: { layers: { id: string; subLayerIds: string[] }[] }
      ) => {
        if (error) return;
        if (res.layers) {
          for (const subLayerData of res.layers) {
            if (subLayerData.id in entries) {
              const layerInfo = await queryServer(
                mapLayer.layer.options.url + subLayerData.id
              );
              addLayer(
                setState,
                layerData,
                layerInfo,
                subLayerData.subLayerIds !== null &&
                  subLayerData.subLayerIds !== undefined
              );
              if (subLayerData.subLayerIds) {
                for (let j = 0; j < subLayerData.subLayerIds.length; j++) {
                  const subLayer = subLayerData.subLayerIds[j];
                  const subLayerInfo = await queryServer(
                    mapLayer.layer.options.url + subLayer
                  );
                  addLayer(setState, layerData, subLayerInfo, false);
                }
              }
            }
          }
        }
      }
    );
  } else if (["geoJSON", "xyzTiles"].includes(mapLayer.type)) {
    addLayer(setState, layerData, mapLayer, false);
  }
};

/**
 * Adds all layers to state, unless optional layer parameter is passed,
 * in which case only that layer is updated.
 *
 * @param setState React setState function
 * @param api GeoView core api functions
 * @param mapId string of current map ID
 * @param layer layer configuration information
 */
const addLayers = (
  setState: Function,
  api: TypeApi,
  mapId: string,
  layer = { id: null }
) => {
  const mapLayers = api.map(mapId).layer.layers;
  if (layer.id) addMapLayer(layer, setState);
  else
    Object.values(mapLayers).forEach((mapLayer) =>
      addMapLayer(mapLayer, setState)
    );
};

export default addLayers;
