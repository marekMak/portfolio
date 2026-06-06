/**
 * Filters custom_registration_types to only include types that have 'on' status.
 *
 * The custom_registration_types object contains entries in the form:
 *   { "custom1": "on", "custom1-name": "Yoga", "custom2": "on", "custom2-name": "Message", "custom3-name": "..." }
 *
 * Only entries where "customN" === "on" are considered active. This function returns
 * an object with only the active custom type keys and their associated metadata keys
 * (e.g. "customN-name").
 *
 * @param {Object|string} customRegistrationTypes - The custom_registration_types value
 * @returns {Object} Filtered object containing only active custom registration types
 */
export function filterActiveCustomRegistrationTypes(customRegistrationTypes) {
  if (!customRegistrationTypes) return {};

  const data =
    typeof customRegistrationTypes === "string"
      ? JSON.parse(customRegistrationTypes)
      : customRegistrationTypes;

  const result = {};
  const allKeys = Object.keys(data);

  allKeys.forEach((key) => {
    if (/^custom\d+$/.test(key) && data[key] === "on") {
      result[key] = data[key];
      const prefix = key + "-";
      allKeys.forEach((relatedKey) => {
        if (relatedKey.startsWith(prefix)) {
          result[relatedKey] = data[relatedKey];
        }
      });
    }
  });

  return result;
}
