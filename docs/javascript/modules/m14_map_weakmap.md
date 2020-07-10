---
id: module14_map_weakmap
title: Map and WeakMap
sidebar_label: "Module 14: Map and WeakMap"
---

import CustomText from '../../../src/components/customText/customText.jsx';

:::note Questions 🤔
1. Why Map when there is a Object
2. Do Map allow `NaN` as a key?
3. Map vs Object
4. Map vs WeakMap
5. What are the application of WeakMap
:::

## Map
----

Map is a key/value data structure introduced in ES6. Map can use any data type(primitive and objects) as a key and can maintain the order of its entries. Maps have elements of both Objects (a unique key/value pair collection), but are more similar to Objects conceptually.

```js
let myMap = new Map();
myMap.set("myKey", "myValue"); // Key as a primitive datatype (string)

let myObj = { myKey: "myValue" };
myMap.set(myObj, "myValue"); // Key as a Object

myMap.get("myKey"); // myValue
myMap.get(myObj); // myValue
```

### Methods and properties are

* **map.set(key, value)** – stores the value by the key
* **map.get(key)** – returns the value by the key, undefined if key doesn’t exist in map
* **map.has(key)** – returns true if the key exists, false otherwise
* **map.delete(key)** – removes the value by the key
* **map.clear()** – removes everything from the map
* **map.size** – returns the current element count

### Salient features of Map

🔸 The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object, So `[...map]` or `[...map.keys()]` has a particular order <br/>
🔸 Map key comparison is roughly the same as strict equality `===` which uses [SameValueZero](https://tc39.es/ecma262/#sec-samevaluezero) Algorithm, but the difference is that `NaN` is considered equal to `NaN`. So `NaN` can be used as the key as well.  <br/>
🔸 Every `map.set` call returns map itself, so we can `chain` the calls <br/>
```js
map.set('hero', 'IronMan')
  .set(InfinityStones, 5)
  .set(IsIronManAlive, false);
```

### Iteration over Map

For looping over a map, there are 3 methods:

* **map.keys()** – returns an iterable for keys
* **map.values()** – returns an iterable for values
* **map.entries()** – returns an iterable for entries `[key, value]`, it’s used by default in `for..of`


### Object.entries: Map from Object

When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization

```js
// array of [key, value] pairs
let map = new Map([
  ['hero',  'Batman'],
  [007,    'James Bond'],
  [true, 'Indian']
]);

console.log(map.get('1')); // str1
```



|                | Map                                                  | Object                                 |
| -------------- | ---------------------------------------------------- | -------------------------------------- |
| Key Type       | Accepts any type as Key                              | Only accept string as a key            |
| Traversal      | Maps are traversal can traverse easily with for...of | Traversal is possible by obtaining key |
| Default Values | None                                                 | Inherited keys from object             |

## WeakMap
----

JavaScript engine stores a value in memory while it is reachable (and can potentially be used)

```js {5}
let superHero = {name: "Batman"};
console.log(superHero); // Batman

// Override the reference
superHero = null; // This value will be garbage collected
```

Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.

For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.

```js {5}
let dc = {name: "Batman"};
let superHero = [dc];

// Override the reference
dc = null;
// dc is stored inside the array, so it won't be garbage-collected
// we can get it as superHero[0]
```

Similar to that, if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.

```js
let dc = {name: "Batman"};
let superHero = new Map();
superHero.set(dc, "----");

// Override the reference
dc = null;
// dc is stored inside the map, so it won't be garbage-collected
// we can get it as superHero.keys()
```

`WeakMap` is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects

`WeakMap` do allow only `object` as a key. Primitive values for a key is not acceptable

Similarly like `map` if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

```js 
let dc = {name: "Batman"};
// highlight-next-line
let superHero = new WeakMap();
superHero.set(dc, "----");

// Override the reference
// highlight-next-line
dc = null; // dc is garbage garbage-collected
```

### WeakMap methods

* **weakMap.get(key)**
* **weakMap.set(key, value)**
* **weakMap.delete(key)**
* **weakMap.has(key)**

WeakMap does not support iteration methods and property keys(), values(), entries() and size so there’s no way to get all keys/values and total size from it.


### Applications of WeakMap

* WeakMap can be used when there is a limited memory
* This can be used for `caching`. Usually in caching service we refresh the contents with new content and delete the older one 


:::info Some Facts about WeakMap
* `WeakMap` in javascript does not hold any keys or values, it just manipulate key value using a unique id and define property to key object. because it define property to key by method Object.defineProperty(), key must not be primitive type.

* WeaKMap does not contain actually key value pairs, we cannot get length property of weakmap.

* Manipulated value is assigned back to key, garbage collector easily can collect key if it in no use

```js
// sample implementation code by Google

if (typeof WeakMap != undefined) {
  return;
}
(function () {
  var WeakMap = function () {
    this.__id = '__weakmap__';
  };

  weakmap.set = function (key, value) {
    var pVal = key[this.__id];
    if (pVal && pVal[0] == key) {
      pVal[1] = value;
    } else {
      Object.defineProperty(key, this.__id, { value: [key, value] });
      return this;
    }
  };

  window.WeakMap = WeakMap;
})();

// https://github.com/googlearchive/WeakMap/blob/master/weakmap.js
```


:::

<CustomText styleClass="heading-1">Reference</CustomText>

* [Javascript  Info](https://javascript.info/weakmap-weakset)
* [Stackoverflow Answer on Map vs Object](https://stackoverflow.com/a/60108544/8555490)