---
id: js
title: Javascript Questions
sidebar_label: 'Javascript'
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

### 🔸 What happens when you call a constructor function with the `new` keyword

<Collapsible>
  <div>
    <h2>It does the 4 things</h2>
    <ul>
      <li>
        It create a new instance for a function. The type of this instance will
        be an object
      </li>
      <li>
        It sets this new object's <span className="chip">internal</span>, {' '}
        <span className="chip">inaccessible</span>, {' '}
        <span className="chip">[[prototype]]</span> {' '}
        (i.e. __proto__)
      </li>
      <li>
        It makes the <span className="chip">this</span> variable point to the
        newly created object.
      </li>
      <li>Returns the newly created object</li>
    </ul>
  </div>
</Collapsible>

### 🔸 `null` vs `undefined`

<Collapsible>
  <div>
    <h2>It does the 4 things</h2>
    <table>
      <thead>
        <th><h3 className="no-margin">null 🚫</h3></th>
        <th><h3 className="no-margin">undefined 🤷🏻‍♂️</h3></th>
      </thead>
      <tr>
        <td>
          null is simply means zero, empty or nothing 
        </td>
        <td>
          Undefined means not assigned any value
        </td>
      </tr>
      <tr>
        <td>
          typeof null is {' '}
          <span className="chip">object</span>
        </td>
        <td>
          typeof undefined is {' '}
          <span className="chip">undefined</span>
        </td>
      </tr>
    </table>
    <p>
      <i> Detail explanation about {' '}</i>
      <a href="../javascript/modules/module3_datatypes/#4-null">
        <b>null</b> and <b>undefined</b>
      </a>
    </p>
  </div>
</Collapsible>

### 🔸 What is a closure, and how/why would you use this?

A closure is the combination of a function **bundled together (enclosed)** with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.

In JavaScript, closures are created every time a function is created, at function creation time.

Whenever a function is declared in JavaScript a **closure** is created. inside the **IIFE**

**Closure Scope Chain: Every closure has `three` scopes**

1. Local Scope (Own scope)
2. Outer Functions Scope
3. Global Scope

```js
// global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // log 20
```

**I came across great post on closure** please refer this to understand more [link](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

### 🔸 Can you give a useful example of closure?

- closure can be used for function currying
- Situations where you might want to do this are particularly common on the web. Much of the code written in front-end JavaScript is event-based. You define some behavior, and then attach it to an event that is triggered by the user (such as a click or a keypress). The code is attached as a callback (a single function that is executed in response to the event).
- You can emulate private methods with closures. Languages such as Java allow you to declare methods as private but JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures, this resulting the modularization 

```js
var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },

    decrement: function () {
      changeBy(-1);
    },

    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
```

### 🔸 What are the consideration that we need to avoid while working with closure

<Collapsible>
  <div>
    <ul>
      <li>
        It is unwise to unnecessarily create functions within other functions if
        closures are not needed for a particular task, as it will negatively
        affect script performance both in terms of processing speed and memory
        consumption
      </li>
      <li>Its not recommended to use closure inside a loop</li>
    </ul>
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

<Collapsible>
  <div>
    <p>
      <i>Refer </i
      ><a href="../javascript/modules/module5_prototype">
        Javascript Prototype </a
      >for the detail elaboration
    </p>
  </div>
</Collapsible>

### 🔸 How does prototypal inheritance differ from classical inheritance?

<Collapsible>
  <div>
    <p>
      <i>Refer </i
      ><a
        href="https://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical/16872315#16872315"
      >
        Stackoverflow Post </a
      >about prototypal and classical inheritance. Highly recommended one
    </p>
    <p>
      <i>Refer Aadit M Shah's </i
      ><a
        href="http://aaditmshah.github.io/why-prototypal-inheritance-matters/#constructors_vs_prototypes"
      >
        post on prototype
      </a>
    </p>
  </div>
</Collapsible>


### 🔸 What's a typical use case for anonymous functions?

<Collapsible>
  <div>
    <h4>Anonymous function is helpful for following cases</h4>
    <ul>
      <li>When we required to pass a function as a parameter to the high order function for <b>ex: setTimeout, Array.prototype.map, promise, etc</b> </li>
      <li>Anonymous function is useful when we deal with the closure</li>
      <li>Anonymous function can also used for <b>callback</b></li>
    </ul>
  </div>
</Collapsible>

### 🔸 What's the difference between host objects and native objects?
<Collapsible>
  <div>
    <table>
      <thead>
        <th>
          <h3 className="no-margin">Host Object</h3>
        </th>
        <th>
          <h3 className="no-margin">Native Object</h3>
        </th>
      </thead>
      <tr>
        <td>Host Objects are created by the environment and are environment-specific. The best-known environment would be a web-browser or could be any other platform.</td>
        <td>A Native Object is created by the developer using predefined classes of JavaScript. These objects will have fully defined specification rather than by the host environment by</td>
      </tr>
      <tr>
        <td><b>Example</b> Window, Document, History, XMLHttpRequest (part of Web API), http, https, url, etc</td>
        <td><b>Example</b> Object (constructor), function, Date, Math, parseInt, eval, string methods, array methods, etc</td>
      </tr>
    </table>
    <p>In <a href="../javascript/modules/module2_object/#host-object-and-native-object">Module 2 Object </a> you can find more details</p>
  </div>
</Collapsible>

### 🔸 Can you give an example of a `curry function` and why this syntax offers an advantage?
<Collapsible>
  <div>
    <p><span className="chip">Currying</span> is a function of many arguments that are rewritten such that it takes the first argument and returns a function which in turn uses the remaining arguments and returns the value.</p>
    <h4>Function currying do have multiple advantages like</h4>
    <ul>
      <li>
        Currying is used in function composition to achieve function programming paradigm
      </li>
    </ul>
    <h3> What are the different ways to achieve function curry</h3>
    <p>Function currying can be achieve using <span className="chip">Closure</span> and <span className="chip">bind()</span></p>
    <h3>How currying is different from regular parameterized function?</h3>
    <p>Partial applications can take as many or as few arguments a time as desired. Curried functions on the other hand always return a unary function: a function which takes one argument.</p>
    <p>All curried functions return partial applications, but not all partial applications are the result of curried functions.</p>
    <p>The unary requirement for curried functions is an important feature.</p>
    <p><b>For more details i have already captured in </b> <a href="../javascript/modules/module4_function/#function-currying"> Module 4 function </a></p>
    <p><b>For more details in depth refer </b><a href="https://stackoverflow.com/questions/36314/what-is-currying/36321#36321">Link </a></p>
  </div>
</Collapsible>


### 🔸 Explain how `Event Loop` works and explain the individual component that take a part in it 

<Collapsible>
  <div>
    <p>
      You’ve probably heard that JavaScript is a single-threaded language. You
      may have even heard the terms <span className="chip">Call Stack</span>,
      <span className="chip"> Event Table</span> and <span className="chip">Event Queue</span>.
    </p>
    <p>
      The concept of event loop is very simple. There’s an endless loop, when
      JavaScript engine waits for tasks, executes them and then sleeps waiting
      for more tasks.
    </p>
    <p><b>Lets see in more details one by one</b></p>
    <h3>The Call Stack</h3>
    <p>
      JavaScript has a single call stack in which it keeps track of what script
      is to be executed and if the scripts belong to the event queue it will
      dispatch to the respective queue and when an event present in the call
      stack is completed it will popup eventually making room for next task. The
      call stack is made up of <span className="chip">stack frames—one</span> for each method
      call
    </p>
    <p>
      When you’re about to execute a function it is added on the call stack.
      Then if that function calls another function — the other function will be
      on top of the first one in the call stack. When you get an error in the
      console you get a long message that shows you the path of execution — this
      is what the stack looked in that exact moment. But what if we make a
      request or put a timeout on something? In theory that should freeze the
      entire browser until it is executed so the call stack can continue? In
      practice however, you know that this doesn’t happen — because of the {' '}
      <span className="chip">Event Table</span> and <span className="chip">Event Queue</span>.
    </p>
    <h3>The Execution Context Stack</h3>
    <p>
      Сall Stack and Execution Stack are different names for the same thing. It
      is a LIFO stack that is used to store execution contexts created during
      code execution.
    </p>
    <p>
      <b>Wikipedia says: </b>
      <i
        >"This kind of stack is also known as an execution stack, program stack,
        control stack, run-time stack, or machine stack" </i
      ><a href="https://en.wikipedia.org/wiki/Call_stack"> Link </a>
    </p>
    <p>
      <b>One more quote: </b>
      <i>
        "In reality, the JavaScript engine creates what’s called an {' '}
        <span className="chip">Execution Stack</span> (also known as the “Call Stack”)."</i
      ><a
        href="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/"
      >
        Link
      </a>
    </p>
    <h4>What's stored in a stack frame?</h4>
    <ul>
      <li>Local variables</li>
      <li>Arguments passed into the method</li>
      <li>Information about the caller's stack frame</li>
      <li>
        The return address—what the program should do after the function returns
        (i.e.: where it should <b>"return to"</b> ). This is - usually somewhere
        in the middle of the caller's code.
      </li>
    </ul>
    <h3>The Event Table</h3>
    <p>
      Every time you call a setTimeout function or you do some async
      operation — it is added to the <b>Event Table</b>. This is a data
      structure which knows that a certain function should be triggered after a
      certain event. Once that event occurs
      <b> (timeout, click, mouse move)</b> it sends a notice. Bear in mind that
      the Event Table does not execute functions and does not add them to the
      call stack on it’s own. It’s sole purpose is to keep track of events and
      send them to the Event Queue.
    </p>
    <h3>
      The Event Queue
    </h3>
    <p>
      The Event Queue is a data structure similar to the stack — again you add
      items to the back but can only remove them from the front. It kind of
      stores the correct order in which the functions should be executed. It
      receives the function calls from the Event Table, but it needs to somehow
      send them to the Call Stack? This is where the Event Loop comes in
    </p>
    <p>
      Event Queue is again divided into two that is {' '}
      <span className="chip">Micro Tasks Queue</span> and {' '}
      <span className="chip">Macro Task Queue (Task Queue)</span>
    </p>
    <h3>The Event Loop</h3>
    <p>
      We’ve finally reached the infamous Event Loop. This is a constantly
      running process that checks if the call stack is empty. Imagine it like a
      clock and every time it ticks it looks at the Call Stack and if it is
      empty it looks into the Event Queue. If there is something in the event
      queue that is waiting it is moved to the call stack. If not, then nothing
      happens.
    </p>
    <p>
      Here are a couple of interesting cases. In what order do you think the
      following code will run?
    </p>
    <div>
      <p><b>setTimeout(() => console.log('first'), 0)</b> <br/>
       <b>console.log('second')</b></p>
    </div>
    <p>Some people think that because set timeout is called with <b>0 (zero)</b> it should run immediately. In fact in this specific example you will see <b>“second”</b> printed out before <b>“first”</b>. JavaScript sees the setTimeout and says “Well, I should add this to my Event Table and continue executing”. It will then go through the Event Table, Event Queue and wait for the Event Loop to tick in order to run.</p>
    <p align='center'>
      <img className="gif-img" src={'https://firebasestorage.googleapis.com/v0/b/pai-profile.appspot.com/o/gifs%2Fevent-looping.gif?alt=media&token=82bdd78b-9a9e-46f7-a5ec-7db815d2f015'}  alt='Event Loop' />
    </p>
  </div>
</Collapsible>