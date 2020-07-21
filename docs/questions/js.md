---
id: js
title: Javascript Questions
sidebar_label: "Javascript"
---

import CB from '../../src/components/customText/customText.jsx';
import Collapsible from '../../src/components/collapsible/Collapsible.jsx';


### 🔸 Are semicolons required in JavaScript?

<Collapsible>
  <div>
    <p>
      Semicolons in JavaScript divide the community. Some prefer to use them
      always, no matter what. Others like to avoid them.
    </p>
    <p>
      JavaScript does not strictly require semicolons. When there is a place
      where a semicolon was needed, it adds it behind the scenes.
    </p>
    <p>
      The process that does this is called {' '}
      <span className="chip">Automatic Semicolon Insertion </span>
    </p>
  </div>
</Collapsible>


### 🔸 Explain how `this` works

<Collapsible>
  <div>
    <p>
      <i>Refer </i
      ><a href="../javascript/modules/module2_object#what-the-hell-is-this-">
        Javascript Object </a
      >for detail elaboration
    </p>
    <p>
      <i>Refer </i
      ><a
        href="https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work"
        >Stackoverflow Post
      </a>
    </p>
  </div>
</Collapsible>



### 🔸 Explain how prototypal inheritance works.

*Refer* [Javascript Prototype](../../javascript/modules/module5_prototype) for detail elaboration 

### 🔸 How does prototypal inheritance differ from classical inheritance?

***Stackoverflow Post*** about prototypal and classical inheritance. Highly recommended one https://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical/16872315#16872315 

Aadit M Shah post on [prototype] (http://aaditmshah.github.io/why-prototypal-inheritance-matters/#constructors_vs_prototypes)

### 🔸 What happens when you call a constructor function with the `new` keyword
It does the 4 things

1. It create a new instance for a function. The type of this instance will be an object
2. It sets this new object's `internal`, `inaccessible`, `[[prototype]]` (i.e. __proto__) 
3. It makes the `this` variable point to the newly created object.
4. Returns the newly created object

### 🔸 `null` vs `undefined`

| <CB styleClass="heading-2 no-margin" > null 🚫 </CB> | <CB styleClass="heading-2 no-margin" >undefined 🤷🏻‍♂️ </CB> |
| ---------------------------------------------------- | -------------------------------------------------------- |
| null is simply means zero, empty or nothing          | Undefined means not assigned any value                   |
| typeof null is `object`                              | typeof undefined is `undefined`                          |

*Refer* [Detail explanation about **null** and **undefined**](../../javascript/modules/module3_datatypes/#4-null)


### 🔸 What is a closure, and how/why would you use one?
A closure is the combination of a function **bundled together (enclosed)** with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. 

In JavaScript, closures are created every time a function is created, at function creation time.

**Closure Scope Chain: Every closure has `three` scopes**

1. Local Scope (Own scope)
2. Outer Functions Scope
3. Global Scope

```js {2}
// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20
```

### 🔸 Can you give a useful example of one?

* closure can be used for function currying
* Situations where you might want to do this are particularly common on the web. Much of the code written in front-end JavaScript is event-based. You define some behavior, and then attach it to an event that is triggered by the user (such as a click or a keypress). The code is attached as a callback (a single function that is executed in response to the event).
* You can emulate private methods with closures. Languages such as Java allow you to declare methods as private but JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures

```js
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.
```

### 🔸 What are the consideration that we need to avoid while working with closure
* It is unwise to unnecessarily create functions within other functions if closures are not needed for a particular task, as it will negatively affect script performance both in terms of processing speed and memory consumption
* Its not recommended to use closure inside a loop

### 🔸 What language constructions do you use for iterating over object properties and array items?

### 🔸 Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?

### 🔸 What's a typical use case for anonymous functions?

### 🔸 What's the difference between host objects and native objects?

### 🔸 Explain the difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

### 🔸 Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

### 🔸 Can you explain what `.call` and `.apply` do? What's the notable difference between the two?

### 🔸 Explain `Function.prototype.bind`

### 🔸 Arrow function vs Regular function

### 🔸 `ES5` vs `ES6`

<!-- https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/ -->

### 🔸 What's the difference between `feature detection`, `feature inference`, and using the `UA string`?

### 🔸 How does `hoisting` and `scoping` works
* What is the difference between `lexical scoping` and `dynamic scoping`?

### 🔸 What is the difference between a parameter and an argument?

### 🔸 Does JavaScript pass by value or by reference?


### 🔸 Explain `Event Delegation` or `DOM Event Delegation`
* What is event delegation and why is it useful? Can you show an example of how to use it?
* Describe `Event Bubbling` and `Event Capturing`

### 🔸 What's the difference between an `attribute` and a `property`?

### 🔸 What are the pros and cons of extending built-in JavaScript objects?

### 🔸 What is the difference between `==` and `===`?

### 🔸 Explain the same-origin policy with regards to JavaScript.

### 🔸 Why is it called a Ternary operator, what does the word `Ternary` indicate?

### 🔸 What is `strict mode`? What are some of the advantages/disadvantages of using it?

### 🔸 What tools and techniques do you use debugging JavaScript code?

### 🔸 What are the different `truthy` and `falsy` values in JS

### 🔸 Explain the difference between mutable and immutable objects
* What is an example of an immutable object in JavaScript?
* What are the pros and cons of immutability?
* How can you achieve immutability in your own code?

### 🔸 Explain the difference between synchronous and asynchronous functions

### 🔸 What is event loop?
* What is the difference between call stack and task queue?
* Spot the difference between Micro Task Queue and Macro Task Queue

### 🔸 What are the differences between variables created using `let`, `var` or `const`?

### 🔸 What are the differences between ES6 class and ES5 function constructors?

### 🔸 Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?

### 🔸 What advantage is there for using the arrow syntax for a method in a constructor?

### 🔸 What is the definition of a higher-order function?

### 🔸 What is `IIFE` and what are the use case of this?
* What is the reason for wrapping the entire contents of a JavaScript source file in a function that is immediately invoked?

### 🔸 Can you give an example for destructuring an object and an array?
* What are the benefits of using spread syntax and how is it different from rest syntax?

### 🔸 Can you give an example of generating a string with ES6 Template Literals?

### 🔸 Can you give an example of a `curry function` and why this syntax offers an advantage?
* What are the different ways to achieve function curry

### 🔸 How can you share code between files?

### 🔸 Why you might want to create static class members?
* How do you create static class in JS

### 🔸 What is the difference between while and do-while loops in JavaScript?

### 🔸 Explain is Execution Context

### 🔸 What is the difference between `Object.assign` vs `Object.clone`
* How do you clone an object in JavaScript?

### 🔸 What is `Decorators` in javascript and When its suitable to use decorators
* What is Property decorator

### 🔸 What is Computed properties what us the typical use cases of this

### 🔸 `const` vs `Object.freeze()`

### 🔸  Null propagation operator / Optional Chaining and Null Coalescing Operator

### 🔸 What is the term `Coercion` in javascript 

### 🔸 What is generators and how is it different from function
* When to use generators 

### 🔸 How `symbol` works 
* Can you explain Symbols and Iterators

### 🔸 Explain Function Decomposition 
* Explain Function Composition 

### 🔸 Explain `Promise`, `Promise Chain` and `Async` and `Await`

### 🔸 Promise.race vs Promise.all

### 🔸 How Callback function different then Promise and what problem promise can solve

### 🔸 Pure function, Anonymous and Named function 

### 🔸 What is prototype design pattern

### 🔸 Explain Map vs WeakMap

### 🔸 Explain Set vs WeakSet

### 🔸 What is Polyfill and Shim

### 🔸 Write a polyfill for `bind()`

### 🔸 What is polyfill why is that required

### 🔸 What is Transpiling in JS

### 🔸 Explain Function Borrowing and when it occur or can be implement

### 🔸 typeOf vs instanceOf

### 🔸 What is Temporals Dead Zone `(TDZ)` when it can occur

### 🔸 Explain Modules in Javascript

### 🔸  How compiler and transpiler are different 

### 🔸  Shallow Copy and Deep Copy

### 🔸  Debounce and its advantage

### 🔸  Throttling and its advantage

### 🔸  How Spider Monkey works

### 🔸  V8 vs SpiderMonkey

### 🔸  How V8 engine works

### 🔸  Memorization and how do we use that

### 🔸  What is Lodash and why is it useful

### 🔸 Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`.
```js
function example() {
  console.log(this)
}
const boundExample = bind(example, { a: true })
boundExample.call({ b: true }) // logs { a: true }
```

### 🔸 What is `short-circuit evaluation` in JavaScript?

### 🔸 Explain the difference between a static method and an instance method.