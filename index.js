'use strict';

const clone = require('lodash.clone');
const isPlainObj = require('is-plain-obj');

const Processor = require('./lib/processor');
const defaultGig = require('./lib/default');

function gigs(adapters) {
  if (!Array.isArray(adapters)) {
    adapters = [];
  }

  return new Processor(adapters);
}

gigs.create = function createGig(data) {
  if (!isPlainObj(data)) {
    throw new TypeError('Parameter must be a plain object');
  }

  let gig = clone(defaultGig);

  for (let key of Object.keys(gig)) {
    if (typeof data[key] !== 'undefined' && typeof data[key] !== 'string' ||
        typeof data[key] === 'string' && data[key].length > 0) {
      gig[key] = data[key];
    }
  }

  return gig;
}

module.exports = gigs;
