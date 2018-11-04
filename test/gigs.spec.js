'use strict';

import test from 'ava';

import gigs from '..';
import defaultGig from '../lib/default';

test('it should make sure the adapters parameter is an array', t => {
  let processor;

  processor = gigs();
  t.true(Array.isArray(processor.adapters));
  t.true(processor.adapters.length === 0);

  processor = gigs([() => {}]);
  t.true(Array.isArray(processor.adapters));
  t.true(processor.adapters.length === 1);

  processor = gigs([() => {}, () => {}]);
  t.true(Array.isArray(processor.adapters));
  t.true(processor.adapters.length === 2);
});

test('#create should validate the parameter', t => {
  t.throws(() => gigs.create());
  t.throws(() => gigs.create(null));
  t.throws(() => gigs.create(true));
  t.throws(() => gigs.create(0));
  t.throws(() => gigs.create('foo'));
  t.throws(() => gigs.create([]));
});

test('#create should use default values', t => {
  t.deepEqual(defaultGig, gigs.create({}));
});

test('#create should override default values', t => {
  const gig = gigs.create({
    source: 'foo',
    title: 'foo developer'
  });

  t.deepEqual('foo', gig.source);
  t.deepEqual('foo developer', gig.title);
});

test('#create should not allow undefined or empty values', t => {
  const gig = gigs.create({
    source: '',
    title: undefined
  });

  t.deepEqual(null, gig.source);
  t.deepEqual(null, gig.title);
});
