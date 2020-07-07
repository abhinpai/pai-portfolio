---
id: module9_promise
title: Promises its super cool 😎
sidebar_label: "Module9: Promise"
---

import Story from '../../../src/components/story/story.jsx';

:::note Questions 🤔
1. What is callback? how do you pass an argument to a callback?
2. How do you save time with the promise
3. Callback vs Promise vs Async/Await
4. What is the Promise APIs?
5. How does Promise work behind the scene? 
6. What is Microtasks? How does it work?
:::

## The Callback
----

A callback is a simple function which is then passed into an asynchronous function as an argument to perform on a certain event in the future and the return value of callback function will be parameters of called function

```js 
// highlight-start
function myCallback(arg){
    console.log("Hey did you called me"+ arg);
}
// highlight-end

function asyncFunction(arg, callback) {
    console.log(arg);
    // highlight-next-line
    let x =  () => callback(🤔);
    x();
}

asyncFunction("Trying callback", myCallback)
```

### Nested Callback 

Consider you want to manufacture a bicycle that involves multiple stages to get one bicycle ready on very high designBiCycle, constructFrame, paintFrame, assembleParts, testingBicycle, releaseBicycle, and many other how do we do it asynchronously Because each function output will be about for another function!. How to chain them now 🤔

Well it's possible with a callback method chaining to let's see how it looks in code

```js
function handleError(err) {
  throw new Error(err);
}

function designBiCycle('loadDesign.js', (design, err) => {
  if(error) handleError(err);
  constructFrame('construct.js', (material, err) =>{
      if(error) handleError(err);
      paintFrame('paint.js', (paint, err) =>{
          if(error) handleError(err);
          assembleParts('parts.js', (parts, err) => {
               if(error) handleError(err);
               testingBicycle('testing.js', (testing, err) =>{
                   if(error) handleError(err);
                   releaseBicycle('release.js', (release, err) => {
                      if(error) handleError(err);
                      console.log("Successfully manufactured Bicycle"); 
                   })
               })
            })
         })
      })
  });
```

Finally, we achieved what we were looking for but isn't it messy. If we have some huge scenario then will end up in `CALLBACK HELL` where code becomes unreadable and non-maintainable. To get rid of this ES6 introduced `promise` to rescue us  

#### What will be the output of following code block

```js 
// highlight-start
function myCallback(arg){
    console.log("Hey did you called me "+ arg);
}
// highlight-end

function asyncFunction(arg, callback) {
    console.log(arg);

    // highlight-start
    setTimeout(() => {console.log("I am timed out"), 0});
    let x =  () => callback('🤔');
    x();
    // highlight-end
}

asyncFunction("Trying callback", myCallback);

//  Trying callback
//  Hey did you called me 🤔
//  I am timed out
```

Why? if you see the log that printed via our code seems to incorrect isn't it! Actually, the answer is NO the output of the following code is accurate.

Even though we declare setTimeout before the callback, setTimeout will take its own time to execute and callback takes its own. Both setTimeout and callback jobs will be enqueued into the `Task Queue` and `Microtasks Queue` accordingly. Since a job in Microtasks Queue will have a high priority `callback` will execute before setTimeout.

## Promise it's crazy
----
Let's see `Promise` with real-life analogies.

:::note Conversation of Niece 👧🏻 and Uncle 🙋🏻‍♂️
<Story actor="Niece">Hey, uncle, On my 5th B'Day, can you gift me a bicycle with Barbies stickers on it? 🥺</Story>
<Story actor="Me">Yes Baby anything for you 😍 <b>(Made a promise)</b></Story>
<Story actor="Niece">I'll call all my friends to show my new 🚲. Let me know when you're going to bring it uncle 😜 <b>(promise return value)</b></Story>
<Story actor="Me">Sure, but what if i don't find a bicycle with Barbies stickers on it? 🤷🏻‍♂️</Story>
<Story actor="Niece">In that case you let me know immediately <b>(failure Callback)</b>. In case if you find what I was looking for then bring it on <b>(success callback)</b></Story>
:::

The analogy isn’t terribly accurate, because JavaScript promises are more complex than a simple subscription list: they have additional features and limitations. But it’s fine, to begin with.

The promise in javascript is something that takes time to get the things done by which it doesn't like to hold others' work. Promise will work independently. all the jobs of the Promise will be enqueued into the Microtasks queue and then it will be dequeued when the task is completed

### Promise Constructor

A Promise Constructor hold two properties that is `PromiseStatus` **[[PromiseStatus]]** and `PromiseValue` **[[PromiseValue]]**

🔸 **PromiseStatus** represent a status of promise that will be `fulfilled/resolved`, `pending`, or `rejected` <br/>
🔸 **PromiseValue** represent a value of the promise that is being `resolved` or `rejected` <br/>

The basic syntax of the promise looks something like this 

```js
let myPromise = new Promise((resolve, reject) =>{
    // Promise body that is "executor"
})
```

The function passed to the new Promise is called the executor. Which run and produce some results eventually.

Its arguments `resolve` and `reject` are callbacks provided by JavaScript itself. When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks.

🔸 `resolve(value)` — if the job finished successfully, with result value. <br/>
🔸 `reject(error)` — if an error occurred, error is the error object. <br/>

In the above example, `myPromise` is an object obtained by Promise constructor. Which will have both status and result.
* Initially status of the promise will be `pending` and changes to either `resolved` or `rejected`
* Initially the value of the result will be  `undefined` and eventually it will change to resolved value or rejected error


:::caution Things to remember
* There can be only a single result or an error. Which means executor can call `resolve` or `reject` method only once. All further calls of `resolve` and `reject` will be ignored
```js
let myPromise = new Promise((resolve, reject) => {
  resolve('I am done');
  resolve('Done and dusted'); // ignored
  reject(new Error('I stuck')); // ignored
});
```
* resolve and reject method accept only one argument or none arguments
* If something goes wrong with executor will be notified with reject which accepts any type but the recommendation is to use `Error Object`
* The properties of promise that is `status` and `result` will be internal. We can't directly access them directly in order to get the value of those properties we should use `then`,`catch`, or `finally` 
:::

:::danger TBU
* Add diagram of Promise constructor properties
* Add illustration of how a promise works
:::

### Chaining Promise

In the above callback section, we try to demonstrate a bicycle manufacturing process and we finally came up with a callback solution that is messy and looks very ugly. To solve that problem ES6 also provided a way to chain them using `promise chining` 

Let's try to achieve the above solution using Promise chaining

```js
function handleError(err) {
  throw new Error(err);
}

let designBiCycle = new Promise((resolve, reject) => {
  try {
    resolve('loadDesign.js');
  } catch (ex) {
    reject(new Error(ex));
  }
});

designBiCycle
  .then((design) => constructFrame(design))
  .then((material) => paintFrame(material))
  .then((paint) => assembleParts(paint))
  .then((parts) => testingBicycle(parts))
  .then((testing) => releaseBicycle(testing))
  .then((release) => console.log('Successfully manufactured Bicycle'))
  .catch((err) => handleError(err));
```

Look now how beautifully 😍 we can write code and achieve same requirement using Promise Chaining this is `Promise Heaven` 😂

:::danger TBU
Add promise chining illustration
:::

### Promise APIs

Promise class contains 5 methods those are 

🔸**Promise.all** <br/>
If we want to execute a number of promise parallelly then we can go ahead with `promise.all` which accepts an array of promise and process the contents once all are done 

> In c# we have `Task.WhenAll()` similar to `Promise.all`

:::caution Remember
If one promises rejects, Promise.all immediately reject,completely forgetting about the other ones in the list. Their results are ignored.
:::

🔸**Promise.allSettled** <br/>

Since `Promise.all` reject a promise if one fails this is good only for `all/none` case Whereas `Promise.allSettled` methods execute parallelly but even if one method fail it won't boughter it will execute the remaining method until all are completed. So that each promise will have value/error in the response

🔸**Promise.race** <br/>

Similar to `Promise.all`, but waits only for the first settled promise and gets its result (or error). If anyone promise process fast that became the result and remaining promise will be ignored

> In c# we have `Task.WhenAny()` similar to `Promise.race`

🔸**Promise.resolve** <br/>
Makes a resolved promise with the given value

🔸**Promise.reject** <br/>
Makes a rejected promise with the given error.


:::danger TBU
Add illustration for promise APIs
:::

For more visualized demonstration read the [blog](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke) written by [Lydia Hallie](https://twitter.com/lydiahallie) 