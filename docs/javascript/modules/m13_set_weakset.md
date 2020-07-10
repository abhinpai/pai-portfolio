---
id: module13_set_weakset
title: Set and Weakset
sidebar_label: 'Module 13: Set and Weakset'
---

:::note Questions
1. How set is different from Map
2. How set is different from Array
3. Set vs WeakSet
:::


## Set
----
A set is a special type of collection in Javascript Unless an array set holds only unique values without any `keys` where each value occurs only once.

### Salient Features of Set

### Set methods
* **new Set(iterable)** – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
* **set.add(value)** – adds a value, returns the set itself.
* **set.delete(value)** – removes the value, returns true if value existed at the moment of the call, otherwise false.
* **set.has(value)** – returns true if the value exists in the set, otherwise false.
* **set.clear()** – removes everything from the set.
* **set.size** – is the elements count.

### Set Iteration Methods

* **set.keys()** – returns an iterable object for values,
* **set.values()** – same as set.keys(), for compatibility with Map,
* **set.entries()** – returns an iterable object for entries [value, value], exists for compatibility with Map.

## WeakSet
----

`WeakSet` behave similarly as a `Set` but it only allows objects as values, primitive values are not allowed. But WeakSet do not support iteration methods/properties like `weakSet.keys()` or `Size`

And `WeakSet` also has the nature of `WeakMap` which is automatic garbage collection if any value in the `WeakSet` don't have any references
