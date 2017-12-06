/**
 * toUrl.js
 *
 * Implement the toUrl function here.
 *
 * Use context data, aspects and subjects to generate the url to connect to
 * your remote data source.
 *
 * Your toUrl implementation must return a string url.
 *
 * DO NOT modify the function signature.
 * DO NOT import or require any other modules.
 * DO NOT modify the module.exports (for testing).
 * DO NOT declare any functions OUTSIDE the body of the toUrl function
 *  itself.
 *
 */

module.exports = {

  /**
   * Creates an url string by concatenating all the subjects/aspects
   * names and including them in the expression.
   * @param {Object} ctx - The context from the Sample Generator
   * @param {Array} aspects - Array of one or more aspects
   * @param {Array} subjects - Array of one or more subjects
   * @returns {String} the url
   */
  toUrl(ctx, aspects, subjects) {
    let baseUrl = ctx.baseUrl;
    const aspectNames = concatArray(aspects);
    const subjectNames = concatArray(subjects);
    baseUrl = baseUrl + `/expression=${ctx.window}:subjects:[${subjectNames}]` +
    `:tests:[${aspectNames}]`;
    return baseUrl;
  },

  /**
   * ContextDefinition (optional)
   *
   * Define context variables that the transform function relies on here.
   * The values that get passed in to the transform will be assigned in the
   * Sample Generator. You can also specify a default value here, to be used if
   * "required" is false and no value is set.
   */
  contextDefinition: {
    baseUrl: {
      description: 'the base url to add the params to',
      required: true,
    },
    window: {
      description: 'the window value to be set in the url',
      required: false,
      default: '-15m',
    }
  },

  /**
   * Helpers (optional)
   * Define helper functions here if you need to be able to test them directly.
   */
  helpers: {

    /**
     * Returns a string concatenated of the elements in the array.
     * @param  {Array} arr - Array of objects have the name attribute.
     * @returns {String} of concatenated names.
     */
    concatArray(arr) {
      return arr.map((e) => e.name).join(',');
    },
  },
};