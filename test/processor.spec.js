'use strict';

import test from 'ava';

import Processor from '../lib/processor';

test('it should have 0 adapters by default', t => {
  const processor = new Processor();

  t.true(Array.isArray(processor.adapters));
  t.true(processor.adapters.length === 0);
});

test('it should throw an error if an adapter is not a function', t => {
  const error = t.throws(() => new Processor([{}]));
  t.is('Invalid gigs adapter found', error.message);

  t.throws(() => new Processor([true]));
  t.throws(() => new Processor([123]));
  t.throws(() => new Processor(['foo']));
  t.throws(() => new Processor([() => {}, 'bar']));
  t.throws(() => new Processor([() => {}, null]));
});

test('it should process and return a promise of results', async t => {
  let result;

  const adapter = () => new Promise(resolve => {
    resolve([{foo: 'bar'}]);
  });

  result = new Processor([adapter, adapter]).process();
  t.true(typeof result.then === 'function'); // eslint-disable-line promise/prefer-await-to-then

  result = await new Processor([adapter, adapter]).process();
  t.deepEqual([{foo: 'bar'}, {foo: 'bar'}], result);
});
