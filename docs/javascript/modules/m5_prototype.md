---
id: module5_prototype
title: Prototype Inheritance ⛓
sidebar_label: "Module 5: Prototype"
---

import GlowBullet from '../../../src/components/glowBullet/glowBullet.jsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::note Questions 🤔
1. What is Prototypal inheritance
2. What is the difference between Prototype and [[Prototype]] and `__proto__`
3. What happens when you try to use or mutate an object using `__proto__` in your production code?
4. **What happens when you call a constructor function with the `new` keyword**
   * A new empty object is created
   * The context object `this` is bound to the new empty object
   * The new object is linked to the function’s prototype property
   * If we see the empty object prototype it will return its own constructor unless another value is added explicitly to the function 
5. **After an object is created, for example using the `new` keyword, how can we access the prototype object that the instantiated object is linked to?** <br/>
    There is two way to access a prototype in javascript
    * Object.getPrototypeOf(yourObject)
    * yourObject.__proto__
6. What is the difference between the classical and the prototypical inheritance?
:::

You might of think `prototypal inheritance` in javascript is similar to inheritance from any other object-oriented programming language.

But, the answer is partial YES. `Prototypal inheritance` is somewhat similar to other programming languages.

And the base definition of inheritance remains the same i.e extending base class properties into child class as simple as that.

> JavaScript had a prototypal inheritance from the beginning. It was one of the core features of the language.

## Prototype Inheritance
----

Have you ever wonder when we create an array, objects, or function how do we get its method on the fly? 🤔. Even though we don't specify a method like a length, split, splice, reduce, etc all will be available for us to utilize its kind of magic isn't it 🔮!!! Naah its Javascript prototypal inheritance 

In JavaScript, every object will be having a special hidden property `[[Prototype]]`, that is either `null` or references another `object`. That object is called a `prototype`

Let's see with an example 

Consider you are manufacturing a laptop (MacbookPro 16") this laptop will have its own features like backlit Keyboard, touch bar, touchid, and many other cool features. 

And now every MacbookPro 16" that you manufacture should have these features.

Now let's assume your constructor function will that will produce a new Macbook every time whenever it calls. Now here comes the `prototype` which will help to ensure all the manufactured Macbook will have all the features that we want.

```js 
function Macbook16() { }; // Constructor

Macbook16.prototype // {constructor: ƒ}

// Assigning the feature to the function
Macbook16.prototype.backlitKeyboard = function () {}
Macbook16.prototype.touchbar = function () {}
Macbook16.prototype.touchid = function () {}

Macbook16.prototype // {backlitKeyboard: ƒ, touchbar: ƒ, touchid: ƒ, constructor: ƒ}

// now lets create an instance for Macbook16 (In our case manufacturing Macbook)
let mac = new Macbook16();
// All my instance of Macbook16 will have feature of backlitKeyboard, touchbar and touchid 
mac.__proto__ // {backlitKeyboard: ƒ, touchbar: ƒ, touchid: ƒ, constructor: ƒ}
```

<p align='center'>
<img className="gif-img" src={useBaseUrl('https://firebasestorage.googleapis.com/v0/b/pai-profile.appspot.com/o/gifs%2FFunction-prototype.gif?alt=media&token=fbfba218-41fa-4832-bb31-00ece36503c7')}  alt='function-prototype' />
</p>

> The `prototype` for a constructor function will be the constructor of its own function itself

<p align='center'>
<img className="gif-img" src={useBaseUrl('https://firebasestorage.googleapis.com/v0/b/pai-profile.appspot.com/o/gifs%2Ffunction-ins-proto.gif?alt=media&token=c8ae2cc8-5a63-4bcf-a6a4-8a8ee637de76')}  alt='function-obj-prototype' />
</p>

Now the question is. Why are these features stored in an object called `__proto__`, and not stored directly as properties of `mac` instance?


`__proto__` is an object which will be present in every call instance and which will be referring to the `prototype` present 

In our example `mac.__proto__` is referring to the `Macbook16.prototype` and thus both hold the same properties whereas `Macbook.prototype` is again referring to `Object.prototype` thatsol


#### `mac.__proto__` ➡️ `Macbook.prototype` ➡️ `Object.prototype` ➡️ `null`

This is nothing but `PROTOTYPE INHERITANCE`

:::info Some thoughts 💡
* ES6 introduced a constructor function which is synthetic sugar(Shorthand for complex structure) for a traditional class
* `__proto__` is historical getter and setter for `[[prototype]]` 
:::

:::caution __proto__ and prototype
Both `__proto__` and `prototype` belong to the prototypal inheritance but both are not the same.

`__proto__` is a property of `class instance` whereas prototype is a `property` of `class constructor`
:::

So far we have seen a prototype inheritance with constructor function and class. So the other way to add a prototype to object is using `Object.create()` method. 

With this method, we can create a new object and specify what prototype of an object we want

```js
let macbook = {
    touchbar: function() {},
    touchId: function() {}
}

let mac = Object.create(macbook);
mac.__proto__; // {touchbar: ƒ, touchId: ƒ}
```

### Play with prototype

We can experiment a lot with the `prototype`. let's see with one small example

```js
// Lets create two object with different property
let MacbookPro = {
    screenSize: "16",
    touchId: true,
    touchBar: true
}

let Macbook = {
     screenSize: "13"
}

// updating prototype
Macbook.__proto__ = MacbookPro;

MacbookPro.__proto__ =  // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
Macbook.__proto__ // {screenSize: "16", touchId: true, touchBar: true}

console.log(`My macbook screen size is ${Macbook.screenSize}`); // My macbook screen size is 13
console.log(`Do my macbook have touchid ${Macbook.touchId}`); // Do my macbook have touchid
```

Whenever we try to access a property on the instance, the engine first searches locally to see if the property is defined on the object itself. if it can't find the property we're trying to access, the engine **walks down the prototype chain through** the `__proto__` property!

## Prototype methods, objects without `__proto__` 
----

The `__proto__` is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard)


<GlowBullet highlightWord="Object.create(proto[, descriptors])"> creates an empty object with given proto as __proto__ and optional property descriptors</GlowBullet>
<GlowBullet highlightWord="Object.getPrototypeOf(obj)"> returns the `__proto__` of obj</GlowBullet>
<GlowBullet highlightWord="Object.setPrototypeOf(obj, proto)"> sets the `__proto__` of obj to proto</GlowBullet>


:::info Things to consider
* We can save memory by adding properties to the prototype that all instances can share it. instead of creating new properties in each instance
* we should not mess up with instance by manipulating `__proto__` resulting in a lag in performance 
* We can achieve a circular prototype chain. If we try then JS will throw an error `TypeError: Cyclic __proto__ value`