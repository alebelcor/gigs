# gigs

> A jobs/careers/openings/positions aggregator

[![npm version](https://img.shields.io/npm/v/gigs.svg)](https://npmjs.org/package/gigs)
[![Build Status](https://img.shields.io/travis/alebelcor/gigs/master.svg)](https://travis-ci.org/alebelcor/gigs)
[![Test coverage](https://img.shields.io/coveralls/alebelcor/gigs.svg)](https://coveralls.io/github/alebelcor/gigs)

## Install

Ensure you have [Node.js](https://nodejs.org) version 4+ installed. Then run the following:

```bash
npm install --save gigs
```

## Usage

```js
const gigs = require('gigs');

const foo = require('gigs-adapter-foo-jobs');

gigs([foo])
  .process()
  .then(gigs => {
    console.log(gigs);
    //=> [ {title: 'Senior Node.js Developer'}, ... ]
  });
```

## API

### gigs(adapters)

Returns a new `Processor` instance set up with `adapters`.

A `Processor` has only a `process()` method which runs its adapters and returns
a `promise` with the results.

#### adapters

Type: `array`

An array of adapters.

### gigs.create(data)

Returns a `gigs` object.

Use this method in your adapter to create a `gigs` object.

#### data

Type: `object`

A plain object used to populate the `gigs` object.

## Further notes

### Adapter

An adapter is a `function` that returns an `array` of `gigs` objects wrapped in a `promise`.

It retrieves data, transforms it, and returns it.

Each adapter is an npm module with a name in the format of `gigs-adapter-<adapter-name>`,
e.g. `gigs-adapter-stackoverflow-jobs`.

### Gigs

A `gigs` object is a plain object with these members:

#### source

Type: `string`

Name of the adapter without the `gigs-adapter-` prefix, e.g. `stackoverflow-jobs`.

#### source_url

Type: `string`

URL of the site where the data comes from, e.g. `http://awesome-job-board.foo`

#### title

Type: `string`

Name of the position, e.g. `Senior Vice President Jr.`

#### description

Type: `string`

Description of the position, e.g. `We're looking for fearless Taco Chef here at "Only Vegan Food, Inc."`

#### url

Type: `string`

URL where you can find more information about the position, e.g. `http://only-vegan-food.foo/careers/taco-chef`

#### company_name

Type: `string`

Name of the company offering the position, e.g. `Only Vegan Food, Inc.`

#### location

Type: `string`

Location of the position. `null` for remote positions, e.g. `San Francisco, CA, US`

#### full_time

Type: `boolean`

Whether the position is full-time or not.

#### remote

Type: `boolean`

Whether the position is remote (or allows remote).

#### published_at

Type: `string`

Publication date of the position in (UTC) `YYYY-MM-DD` format, e.g. `2016-12-16`

## Related

* [gigs-adapter-codepen-jobs](https://github.com/alebelcor/gigs-adapter-codepen-jobs) - A gigs adapter for [CodePen's job board](https://codepen.io/jobs)
* [gigs-adapter-dribbble-jobs](https://github.com/alebelcor/gigs-adapter-dribbble-jobs) - A gigs adapter for [Dribbble's job board](https://dribbble.com/jobs)
* [gigs-adapter-landingjobs](https://github.com/alebelcor/gigs-adapter-landingjobs) - A gigs adapter for [Landing.jobs](https://landing.jobs)
* [gigs-adapter-nofluffjobs](https://github.com/alebelcor/gigs-adapter-nofluffjobs) - A gigs adapter for [No Fluff Jobs](https://nofluffjobs.com)
* [gigs-adapter-remotebase](https://github.com/alebelcor/gigs-adapter-remotebase) - A gigs adapter for [Remote Base](https://remotebase.io)
* [gigs-adapter-stackoverflow-jobs](https://github.com/alebelcor/gigs-adapter-stackoverflow-jobs) - A gigs adapter for [Stack Overflow's job board](http://stackoverflow.com/jobs)

## License

MIT © Alejandro Beltrán
