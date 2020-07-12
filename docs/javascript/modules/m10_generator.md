---
id: module10_generator
title: Generator and Iterator ⚙️
sidebar_label: 'Module 10: Generator'
---

import CustomText from '../../../src/components/customText/customText.jsx';

:::note Questions 🤔

1. What are generator and iterator
2. How generator function is different from regular function
3. What denotes a generator function
4. What are function and function
5. Is the below syntax is right?

```js
function* myGenerator() {
  yield 'Hey there!!';
}
```
6. What is the role of `yield`
7. How `yield` is different than `yield*`
8. What does generator object will contain
9. What is generator composition and how can we achieve it?
10. How to break a generator
:::


So far we have seen the Javascript function can return an only single value, multiple values in a single object or nothing but have you ever thought that how can one function return multiple values? Is it really possible?

Yes, it is possible with the help of **Generator Functions**

A generator function can  return multiple values one after other using its `generator object`

## Generator functions 
----

To create a generator function we need to suffix a `function` keyword with `*` something like this `function*` which will make a function as a generator 

```js
function* myGenerator() {
  yield 'Hello Hackers';
  yield 'Namaste Developers';
  return 'Hi Beautiful People';
}

// We can also write a generator function by adding the suffix to the function name.
// But function* is the recommended one which describe the kind of function is not same  
function *myGenerator() {
  yield 'Hello Hackers';  
  yield 'Namaste Developers';
  return 'Hi Beautiful People';
}
```
Generator functions behave differently from regular ones. When such a function is called, it doesn’t run its code. Instead, it returns a special object, called `generator object`, to manage the execution.

```js
function* myGenerator() {
  yield 'Hello Hackers';
  yield 'Namaste Developers';
  return 'Hi Beautiful People';
}

let gen = myGenerator();
console.log(gen);   // myGenerator {<suspended>}
                    // __proto__: Generator
                    // [[GeneratorLocation]]: VM1873:1
                    // [[GeneratorStatus]]: "suspended"
                    // [[GeneratorFunction]]: ƒ* myGenerator()
                    // [[GeneratorReceiver]]: Window
                    // [[Scopes]]: Scopes[3]
```

The main method in the `generator object` is `next()`. When called, it runs the execution until the nearest `yield <value>` statement (value can be omitted, then it’s `undefined`). Then the function execution pauses, and the yielded value is returned to the outer code.

The result of `next()` is always an object with two properties

* `value`: the yielded value
* `done`: `true` if the function code has finished, otherwise `false`

### Generator Object Methods and States

* `next()`  Returns the next value in a generator
* `return()`  Returns a value in a generator and finishes the generator
*  `throw()`  Throws an error and finishes the generator
* `suspended` Generator has halted execution but has not terminated
* `closed`  Generator has terminated by either encountering an error, returning, or iterating through all values

```js {8-10}
function* myGenerator() {
  yield 'Hello Hackers';
  yield 'Namaste Developers';
  return 'Hi Beautiful People';
}

let gen = myGenerator();
console.log(gen.next());  // {value: "Hello Hackers", done: false}
console.log(gen.next());  // {value: "Namaste Developers", done: false}
console.log(gen.next());  // {value: "Hi Beautiful People", done: true}
```

In the above code, the generator `myGenerator` returns 3 different results **highlighted one**, and the in the third log value of `done` is `true` which means generator notifies that there is no other value left to return. This is the real beauty of the generator

:::info Remember
* A generator will remember the last returned value. When we call next time it will not return the previously returned value instead it will return next value if any value present 

* We can't make anonymous function and arrow function as a generator function if we do so Javascript will throw an error 
_**Function statements require a function name / Unexpected token '*'**_
:::

## `yield` Operators
----

Generators introduce a new keyword to JavaScript: `yield`. `yield` can pause a generator function and return the value that follows `yield`, providing a lightweight way to iterate through values.

```js {2-4}
function* myGenerator() {
  yield 'Hello Hackers';
  yield 'Namaste Developers';
  return 'Hi Beautiful People';
}
```

Now, when we call `next()` on the generator function, it will pause every time it encounters `yield`. `done` will be set to `false` after each yield, indicating that the generator has not finished. Once it encounters a return, or there are no more yields encountered in the function, `done` will flip to `true`, and the generator will be finished.

## Iterating Over a Generator
----

Generators are iterators which means we can loop over the generator methods

```js {8-10}
function* myGenerator() {
  yield 'Hello Hackers';
  yield 'Namaste Developers';
  return 'Hi Beautiful People';
}

let gen = myGenerator();
for (let value of gen) {
  console.log(value); // Hello Hackers, Namaste Developers
}
```

If you see the above code result it will return only first two value but it hasn't returned third value that is **Hi Beautiful People**

It’s because `for..of` iteration ignores the last value, when `done: true`. So, if we want all results to be shown by `for..of`, we must return them with yield

```js {8-10}
function* myGenerator() {
  yield 'Hello Hackers';
  yield 'Namaste Developers';
  yield 'Hi Beautiful People';
}

let gen = myGenerator();
for (let value of gen) {
  console.log(value); // Hello Hackers, Namaste Developers, Hi Beautiful People
}
```

As generators are iterable, we can call all related functionality, e.g. the `spread syntax ...`

```js
function* myGenerator() {
  yield 'Hackers';
  yield 'Developers';
  yield 'Beautiful People';
}

let result = ['Hi', ...myGenerator()];
console.log(result); // ["Hi", "Hackers", "Developers", "Beautiful People"]
```

In the code above, **...myGenerator()** turns the iterable generator object into an array of items. to know more how that works read about [spread and rest syntax](module7_destruct/#spread-operator)

## Using generators for iterables
----

Let's see with one sample code of generator for iterables

```js
let range = {
  from: 1,
  to: 5,

  // for..of range calls this method once in the very beginning
  [Symbol.iterator]() {
    // ...it returns the iterator object:
    // onward, for..of works only with that object, asking it for next values
    return {
      current: this.from,
      last: this.to,

      // next() is called on each iteration by the for..of loop
      next() {
        // it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// iteration over range returns numbers from range.from to range.to
console.log([...range]); // 1,2,3,4,5
```

We can use a generator function for iteration by providing it as Symbol.iterator.

We still do have a scope to reduce no of lines

```js
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    // a shorthand for [Symbol.iterator]: function*()
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

console.log([...range]);// 1,2,3,4,5
```

That works, because `range[Symbol.iterator]()` now returns a generator, and generator methods are exactly what `for..of` expects. it has a `.next()` method that returns values in the form `{value: ..., done: true/false}`



## Generator composition
----

Generator composition is a special feature of generators that allows to transparently **embed** generators in each other

For instance, we have a function that generates a sequence of numbers:

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
```

Now we’d like to reuse it to generate a more complex sequence

* First, digits 0..9 (with character codes 48…57),
* followed by uppercase alphabet letters A..Z (character codes 65…90)
* followed by lowercase alphabet letters a..z (character codes 97…122


```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
```

The `yield*` directive delegates the execution to another generator. This term means that `yield* gen` iterates over the generator `gen` and transparently forwards its yields outside. As if the values were yielded by the outer generator.


The result is the same as if we inlined the code from nested generators

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // yield* generateSequence(48, 57);
  for (let i = 48; i <= 57; i++) yield i;

  // yield* generateSequence(65, 90);
  for (let i = 65; i <= 90; i++) yield i;

  // yield* generateSequence(97, 122);
  for (let i = 97; i <= 122; i++) yield i;

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
```

_**Note:** The above code snippet is taken from Javascript info_

## Closing a Generator
----

As we've seen, a generator can have its `done` property set to `true` and it's status set to closed by iterating through all its values. There are two additional ways to immediately cancel a generator: with the `return()` method, and with the `throw()` method.

With `return()`, the generator can be terminated at any point, just as if a return statement had been in the function body. You can pass an argument into `return()`, or leave it blank for an undefined value.

```js {8-10}
function* myGenerator() {
  yield 'Hello Hackers';
  yield 'Namaste Developers';
  return 'Hi Beautiful People';
}

let gen = myGenerator();
console.log(gen.next());  // {value: "Hello Hackers", done: false}
console.log(gen.return ());  // {value: undefined, done: true}
console.log(gen.next());  // {value: undefined, done: true}
```

The first `next()` will give us **'Hello Hackers'**, with `done` set to **false**. If we invoke a `return()` method on the Generator object right after that, we'll now get the passed value and done set to `true`. Any additional call to `next()` will give the default completed generator response with an `undefined` value.

<CustomText styleClass="heading-1">Reference</CustomText>

* [Javascript Info](https://javascript.info/generators)
* [Visual representation by Lydia Hallie](https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36)
* [Pony Foo](https://ponyfoo.com/articles/es6-iterators-in-depth)

