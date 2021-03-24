# Recurring functions

Recurring functions that are usually found and used on Stackoverflow or other code sharing websites. Exported function are not minified so please use a minifier/bundler if you use any.

- No dependencies
- Written in Typescript
- Short aliases for all function names

```
npm i recurring-functions
```

## Function

Function names and there aliases are unique. They also documented for autocompletion with typedoc.
More information or credits can be found in each function.

### addToArrayIfNotExists

Add value to array if the value does not exists (no objects);

```js
import { addToArrayIfNotExists } from 'recurring-functions';

addToArrayIfNotExists([1, 2, 3], 3);

// output: [1,2,3]
```

Aliases: `addToArrIfNotExi` `ataine`

### capitalizeFirstLetter

Capitalize the first letter of a string / text

```js
import { capitalizeFirstLetter } from 'recurring-functions';

capitalizeFirstLetter('some text');

// output: "Some text"
```

Aliases: `capFirLet` `cfl`

### deepCopy

Deep copy of object or array

```js
import { deepCopy } from 'recurring-functions';

deepCopy({});

// output: {}
```

Aliases: `deeCop` `dc`

### distanceGeoPoints

This routine calculates the distance between two points (given the
latitude/longitude of those points). It is being used to calculate
the distance between two locations using GeoDataSource (TM) products

```js
import { deepCopy } from 'recurring-functions';

distanceGeoPoints(59.3293371, 13.4877472, 59.3225525, 13.4619422, 'K');

// output: 1.6467140606313462
```

Aliases: `disGeoPoi` `dgp`

### mergeArraysByKey

Merges two or more arrays of objects into a single array by merging objects with the same key

```js
import { mergeArraysByKey } from 'recurring-functions';

const arr1 = [{ resourceId: '1' }, { resourceId: '2' }];
const arr2 = [{ resourceId: '2' }, { resourceId: '3' }];
mergeArraysByKey('resourceId', arr1, arr2);

// output: [{resourceId: "1"},{resourceId: "2"},{resourceId: "3"}]
```

Aliases: `merArrByKey` `mabk`

### randomNumberBetween

Get a random number between 2 numbers

```js
import { randomNumberBetween } from 'recurring-functions';

randomNumberBetween(1, 5);

// e.g. output: 4
```

Aliases: `radNumBet` `rnb`

### removeElementsByClass

Removes items from dom by class name. Requires: `document`, works only in browsers.

```js
import { removeElementsByClass } from 'recurring-functions';

removeElementsByClass('popup');
```

Aliases: `remEleByCla` `rebc`

## Test

If you want to test the functions run the test command

```
npm run test
```

## Pull requests

Feel free to do one
