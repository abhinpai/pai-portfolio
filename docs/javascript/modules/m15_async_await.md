---
id: module15_async_await
title: A story of Async and Await 🥰
sidebar_label: "Module 16: Async Await"
---

import CustomText from '../../../src/components/customText/customText.jsx';

:::note Questions 🤔
1. How async-await is different from Promise
2. In what scenario we should use async and await\
:::

Async/Await is a special syntax to work with Promise in a smart manner. This is being introduced by ES7 which provides the same essence of Promise. 

They allow you to write promise-based code as if it were synchronous, but without blocking the main thread. They make your asynchronous code less "clever" and more readable.

In a simple word Async/Await quite frankly marvelous

In order to make function as async, we have to start a function with `async` keyword but only with `async` keyword this function won't work effectively but if you use `await` keyword along with `async` you can see the magic of these keywords

```js {1-2}
async function buyMeCoffee() {
  let coffee = await buy();
  console.log(coffee);
}
```

If you use the `async` keyword before a function definition, you can then use `await` within the function. When you `await` a promise, the function is paused in a non-blocking way until the promise settles. If the promise fulfills, you get the value back. If the promise rejects, the rejected value is thrown.

### Comparing Promise and Async/Await

Promise code snippet

```js
let buyMeCoffee = function Promise((resolve, reject) =>{
    resolve("Capitano");
});

buyMeCoffee.then(res =>{
    console,log(res);
});
```

Async/Await code snippet

```js
async function buyMeCoffee() {
  let coffee = await buy();
  console.log(coffee);
}
```

It's the same number of lines, but all the callbacks are gone. This makes it way easier to read

:::info Tip
Anything you await is passed through Promise.resolve(), so you can safely await non-native promises.
:::

:::caution Remember 
* It's not possible to use `await` keyword inside a regular function (Without `async`). If we try to use then an error will be thrown
* `await` won’t work in the top-level code. It has to be wrapped inside the `async` function
:::

## Other async function syntax 

We've seen `async function() {}` already, but the async keyword can be used with another function syntax

### Arrow functions

```js
// map some URLs to json-promises
const jsonPromises = urls.map(async url => {
  const response = await fetch(url);
  return response.json();
});
```

:::caution Remember
`array.map(func)` doesn't care that I gave it an async function, it just sees it as a function that returns a promise. It won't wait for the first function to complete before calling the second.
:::


### Object methods

```js {2-3}
const superHero = {
  async getHero(name) {
    const hero = await db.getHero(name);
    return hero;
  }
};

superHero.getHero('Iron Man').then(…);
```
### Class methods

```js
class SuperHero {
    constructor(name) {
        this.heroName = name;
        this.hero = db.getHero(name);
    }

    async getHero(){
        return await this.hero;
    }
}
let hero = new SuperHero("Hulk");
hero.getHero();
```

## Error Handling
----

If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line.

```js
async function f() {
  await Promise.reject(new Error("Whoops!"));
}
```

…is the same as this:

```js
async function f() {
  throw new Error("Whoops!");
}
```

We can also use `try-catch` block to handle exceptions or errors

:::info Promise.all for async
`async/await` works well with `Promise.all`. When we need to wait for multiple promises, we can wrap them in `Promise.all` and then await

In the case of an error, it propagates as usual, from the failed promise to Promise.all, and then becomes an exception that we can catch using try..catch around the call.
:::


<CustomText styleClass="heading-1">Reference</CustomText>

* [Javascript Info](https://javascript.info/async-await)
* [Lydia Hallie Blog](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)