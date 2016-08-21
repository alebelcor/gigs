'use strict';

const flattendeep = require('lodash.flattendeep');
const some = require('lodash.some');

module.exports = class Processor {
  constructor(adapters) {
    adapters = adapters || [];

    const hasInvalidAdapters = some(adapters, (adapter) => {
      return typeof adapter !== 'function';
    });

    if (hasInvalidAdapters) {
      throw new Error(i + ' is not a gigs adapter');
    }

    this.adapters = adapters;
  }

  process(options) {
    options = options || {};

    return Promise.all(this.adapters.map((adapter) => {
      return adapter(options);
    }))
      .then(flattendeep);
  }
};
