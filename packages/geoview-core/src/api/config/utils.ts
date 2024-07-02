import Ajv from 'ajv';
import cloneDeep from 'lodash/cloneDeep';

import { CV_CONST_SUB_LAYER_TYPES, CV_CONST_LAYER_TYPES } from '@config/types/config-constants';
import { TypeJsonObject } from '@config/types/config-types';
import schema from '@config/types/config-validation-schema.json';
import { MapFeatureConfig } from '@config/types/classes/map-feature-config';
import { TypeGeoviewLayerType, TypeLayerEntryType, TypeLocalizedString } from '@config/types/map-schema-types';
import { EntryConfigBaseClass } from '@/api/config/types/classes/sub-layer-config/entry-config-base-class';

import { logger } from '@/core/utils/logger';

type NewType = TypeGeoviewLayerType;

/**
 * Definition of the GeoView layer entry types for each type of Geoview layer
 */
export const convertLayerTypeToEntry = (layerType: NewType): TypeLayerEntryType => {
  switch (layerType) {
    case CV_CONST_LAYER_TYPES.CSV:
    case CV_CONST_LAYER_TYPES.GEOJSON:
    case CV_CONST_LAYER_TYPES.GEOPACKAGE:
    case CV_CONST_LAYER_TYPES.OGC_FEATURE:
    case CV_CONST_LAYER_TYPES.WFS:
    case CV_CONST_LAYER_TYPES.ESRI_FEATURE:
      return CV_CONST_SUB_LAYER_TYPES.VECTOR;

    case CV_CONST_LAYER_TYPES.IMAGE_STATIC:
    case CV_CONST_LAYER_TYPES.ESRI_DYNAMIC:
    case CV_CONST_LAYER_TYPES.ESRI_IMAGE:
    case CV_CONST_LAYER_TYPES.WMS:
      return CV_CONST_SUB_LAYER_TYPES.RASTER_IMAGE;
    case CV_CONST_LAYER_TYPES.XYZ_TILES:
    case CV_CONST_LAYER_TYPES.VECTOR_TILES:
      return CV_CONST_SUB_LAYER_TYPES.RASTER_TILE;
    default:
      // Throw unsupported error
      throw new Error(`Unsupported layer type ${layerType} to convert to layer entry`);
  }
};

/**
 * Validate a section of the configuration against the schema identified by the schema path.
 *
 * @param {string} schemaPath The path to the schema section to use for the validation.
 * @param {object} targetObject The map feature configuration to validate.
 *
 * @returns {boolean} A boolean indicating that the schema section is valid (true) or invalide (false).
 */
export function isvalidComparedToInputSchema(schemaPath: string, targetObject: object): boolean {
  // create a validator object
  const validator = new Ajv({
    strict: false,
    allErrors: false,
  });

  // initialize validator with schema file
  validator.compile(schema);

  const validate = validator.getSchema(schemaPath);

  if (validate) {
    // validate configuration
    const valid = validate(targetObject);

    // If an error is detected, print it in the logger
    if (!valid) {
      for (let i = 0; i < validate.errors!.length; i += 1) {
        const error = validate.errors![i];
        const { instancePath } = error;
        const path = instancePath.split('/');
        let node = targetObject as Record<string, unknown>;
        for (let j = 1; j < path.length; j++) {
          node = node[path[j]] as Record<string, unknown>;
        }
        logger.logWarning('='.repeat(200), '\nSchema error: ', error, '\nObject affected: ', node);
      }
      return false;
    }
    return true;
  }
  logger.logError(`Cannot find schema ${schemaPath}`);
  (targetObject as MapFeatureConfig | EntryConfigBaseClass)?.setErrorDetectedFlag?.();
  return false;
}

/**
 * Validate a section of the configuration against the schema identified by the schema path.
 * The internal schema is used internally by the viewer when we instanciate or modify a configuration object
 * to make sure nothing has been broken and prove that the GeoView metadata are conform.
 *
 * Since the useInternalSchema is never provided by the users and set internally before the
 * validation call, we use it as a flag to indicate we want to use the internal schema type
 * for the schema validation.
 *
 * The addInternalFlag must be set to true when we want to validate a GeoView layer or a sublayer.
 * All other types have the same definition for the input and internal schemas.
 *
 * @param {string} schemaPath The path to the schema section to use for the validation.
 * @param {object} targetObject The map feature configuration to validate.
 * @param {boolean} useInternalSchema Adds useInternalSchema flag to the object to be validated.
 *
 * @returns {boolean} A boolean indicating that the schema section is valid (true) or invalide (false).
 */
export function isvalidComparedToInternalSchema(schemaPath: string, targetObject: object, useInternalSchema = false): boolean {
  // The clone operation copies only the public properties, no private using #.
  const targetObjectToValidate: object = cloneDeep(targetObject);
  if (useInternalSchema) Object.assign(targetObjectToValidate, { useInternalSchema });
  return isvalidComparedToInputSchema(schemaPath, targetObjectToValidate);
}

/**
 * Normalize the localized string parameter. If a language is set and the other is not, the undefined language is set to
 * the value of the other.
 * @param {TypeLocalizedString | TypeJsonObject} localizedString The localized string to normalize.
 *
 * @returns {TypeLocalizedString | undefined} A normalized localized string.
 */
export function normalizeLocalizedString(localizedString: TypeLocalizedString | TypeJsonObject): TypeLocalizedString | undefined {
  const returnValue = { en: localizedString?.en as string, fr: localizedString?.fr as string } as TypeLocalizedString;
  if (localizedString && (returnValue.en || returnValue.fr)) {
    if (!returnValue.fr) returnValue.fr = returnValue.en;
    if (!returnValue.en) returnValue.en = returnValue.fr;
    return returnValue;
  }
  return undefined;
}