'use strict';

const flattenDeep = require('lodash/flattenDeep');

module.exports = class Processor {
  constructor(adapters) {
    adapters = adapters || [];

    const hasInvalidAdapters = adapters.some(adapter => {
      return typeof adapter !== 'function';
    });

    if (hasInvalidAdapters) {
      throw new Error('Invalid gigs adapter found');
    }

    this.adapters = adapters;
  }

  async process(options) {
    options = options || {};

    const results = await Promise.all(this.adapters.map(adapter => {
      return adapter(options);
    }));

    return flattenDeep(results);
  }
};
