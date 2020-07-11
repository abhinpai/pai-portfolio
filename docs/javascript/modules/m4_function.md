---
id: module4_function
title: Function
sidebar_label: "Module 4: Function"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note Questions 🤔
1. How arrow function is different from regular function
2. Explain `call`, `apply` and `bind`
3. What is IIFE
4. **How do you return multiple values from a function**
   ```js
    let song = {
        name: "Jai Ho",
        composer: "A.R.Rehman",
        getSong: function () { console.log(this.name)}
    }
    let getSongDetails = () =>  { return ({...song})}
    let {composer, getSong} = getSongDetails();
    getSong(); // Jai Ho
   ```
5. **How do you use the optional argument with an optional callback**
    ```js
    function sampleMethod(...args) {
        let message = args[0];
        console.log(message);
        let callback = args[2];
        callback(args[1]); // calling callback method
    }
    let logError = (err) => console.log(err);
    sampleMethod("Executed Sample Message", "Hey i got a problem", logError);
    // Executed Sample Message
    // Hey i got a problem
    ```
6. What is the callback function
7. What is the benefit of `IIFE`
8. What are the different ways to declare a method?
9. `setInterval` vs `setTimeout`
10. How do you achieve function chaining 
11. What is High Order Function
:::

## Regular Function
----

Function in programming is one of the most basic elements. It is a set of statements that perform some activity to get the result. In lots of cases, the action is performed using the data which are provided as input. The statements in the function are executed every time the function is invoked.

We may define functions in two different ways.

```js
// 1
function sayHi(name) {
    return 'Hi'+name;
}

// 2
var sayHi = function (name) {
    return 'Hi' + name;
}

```

### Pure Function

The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments.
The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.

```js
const sum = (x, y) => x+y;
```

## Function Parameter
----

The function accesses the outer world using its parameters.

### Regular function parameters
A JavaScript function can have any number of parameters just like any other programming languages

### Default parameters
The default parameter is very useful in a more complex application. When we don't have any clarity about the parameter what will that be then its better to define a default parameter.

```js
function helloName(name = "Abhin Pai") { console.log(name) }
helloName(); // Abhin Pai
```

### Parameter destructuring
Parameter destructuring one can destructure inline the parameter’s objects or arrays.

This feature makes it useful to extract just a few properties from the parameter

```js
function helloDeveloper({ name = "Abhin Pai", from } = {}) { 
    console.log(`${name} from ${from}`) 
}
helloDeveloper({from: "India"}); // Abhin Pai from India
```

### Arguments object

`Arguments` is the special object, which holds all the invocation arguments in an array-like object for a function

```js
function helloDeveloper(){
    console.log(arguments);
}
helloDeveloper("This is sample arguments"); // Arguments ["This is sample arguments", callee: ƒ, Symbol(Symbol.iterator): ƒ]
```
### Rest parameters

`rest` parameter lets you collect all the arguments of the function call into an array.

Learn more about rest operator from this [link](module8_destruct#rest-operator)

```js
let developerInfo = (...args) => consol.log(`Hi there i am ${args[0]}, I am from ${args[1]}`);
developerInfo("Abhin Pai",  "India");
```

## Arrow (Fat Arrow) Function
----

Arrow functions are not just a `shorthand` for writing small stuff. They have some very specific and useful features.

We can come up with various scenario where we can find a function which executes somewhere in our service. In such a case, arrow functions will come handy

Its very simple to declare an and use the arrow function

```js
let printMessage = () => console.log("Hello Hackers");
printMessage(); // Hello Hackers
```


:::caution Things to remember about Arrow Function
1. An arrow function does not have `this`. If we try to access `this` inside an arrow function then the function will give result `undefined`

```js
let MyObject = {
    name = "Abhin Pai",
    printMyName = () => { console.log("Hello")}
}

MyObject.printMyName(); // My name is undefined\
```

2. Arrow function can't be used as constructor function which you can't create an instance for an arrow function using `this`

3. Arrow has no `arguments` variable 

```js
function regularFunction(arg) { console.log(arguments)}
regularFunction("Hello There"); // Arguments ["Hello", callee: ƒ, Symbol(Symbol.iterator): ƒ]

let arrowFunction = (arg) => console.log(arguments);
arrowFunction("Hello There"); // arguments are not defined
```

But this is great for `decorates`. when we need to forward a call with the current this and arguments. 

```js
function decorator(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  };
}

function message(who) {
  alert('Hello, ' + who);
}

let hello = decorator(message, 3000);
hello("People"); // Hello, People after 2 seconds
```

And the same with arrow function we can trim the no of lines

```js
function decorator(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  };
}
```

Here we had to create additional variables `args` and `ctx` so that the function inside setTimeout could take them.
:::

## `IIFE` Immediately Invoked Function Expression
----

As we know that functions are one of the building blocks of any programming language and JavaScript has taken the Functions to a whole new level.

Functions that are executed as soon as they are mounted, these functions are known as Immediately Invoked Function Expressions or `IIFEs`.

The syntax of `IIFEs` will be encapsulated inside the parentheses for which explicit function call is not required

```js
(function() { console.log("Hello Beautiful People")})(); // Hello beautiful people 
```

In the above example, we have demonstrated how `IIFE` will look like and as soon as we declare and mounted into the stack it will get execute the function body.

Any regular function we can turn into `IIFE`

:::caution Things to remember
1. `IIFE` follow their own scope like any other function/variable in JavaScript.

```js
function Message() {
    console.log("This is beginning");
    (function() { console.log("Hey there"); })();
    console.log("This is end");
}

message();
// This is beginning
// Hey there
// This is end
```

2. `IIFEs` have there owned scope i.e. the variables you declare in the Function Expression will not be available outside the function.
3. Similarly to other function `IIFEs` can also be named or anonymous, but even if an `IIFE` does have a name it is impossible to refer/invoke it
4. IIFEs can also have parameters
5. Explicitly it is not required to define return statements to an arrow function. Arrow function will do it for you out of the box

```js
(function WhatsTheTimeNow(date) { console.log()})(new Date().toTimeString());
```
:::

## Decorators and forwarding
----

A decorator is simply a way of wrapping one piece of code with another — literally `decorating` it. This is a concept you might well have heard of previously as functional composition or higher-order functions.

```js
function doSomething(name) { // A usual function
  console.log('Hello, ' + name);
}

function loggingDecorator(wrapped) { // decorator function
  return function() {
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finished');
    return result;
  }
}

let wrapped = loggingDecorator(doSomething); // calling decorator function by passing a regular function as an argument
wrapped();
// Starting
// Hello, undefined
// Finished
```

Decorator function can also be treated as high order function

For more details check out decorator example in [JavascriptInfo](https://javascript.info/call-apply-decorators)

## `Call`, `apply` and `bind`
----

### `call` and `apply` methods also known as `Function borrowing`

Every object in the javascript will have access to the call method out of the box which makes developer life easy.

`call` and `apply` are very similar—they invoke a function with a specified context.

`call` and `apply` method is also called as Function borrowing meaning you are borrowing a method from object function or any other function which will then take a context that is passed in the method parameter and on later part we can call the method on behalf of the passed context

```js 
let developer = {
  name: "Abhin Pai",
  url: "www.abhinpai.github.io"
}

function developerDetails() {
  // highlight-next-line
  console.log(`${this.name} you can reach me via ${this.url}`)
}

// highlight-start
developerDetails.call(developer); // Abhin Pai you can reach me via www.abhinpai.github.io
developerDetails.apply(developer); // Abhin Pai you can reach me via www.abhinpai.github.io
// highlight-end
```

In the above code `this` is referring to the object developer because we have passed developer as a current reference object and the output of call and apply method is same the only difference of `call` and `apply` is the second argument

```js 
let developer = {
  name: "Abhin Pai",
  url: "www.abhinpai.github.io"
}

function developerDetails(country) {
  // highlight-next-line
  console.log(`${this.name} you can reach me via ${this.url} from ${country}`)
}

// highlight-start
developerDetails.call(developer, "India"); // Abhin Pai you can reach me via www.abhinpai.github.io from India
developerDetails.apply(developer, ["India"]); // Abhin Pai you can reach me via www.abhinpai.github.io from India
// highlight-end
```

If you observe the above code snippet `developerDetails` is expecting one more additional argument `country` which we are passing via `call` and `apply` method.

Where `call` method allows passing the argument as an independent `string` but in `apply` method we need to pass 2 and further arguments in an array of string

### `bind` method

Even bind method is similar to the Function borrowing methods but bind method buckle up with an object that passed as an argument to it and return the copy of that method which can be used in later part of code

```js
 let developer = {
  name: "Abhin Pai",
  url: "www.abhinpai.github.io"
}

function developerDetails(country) {
  // highlight-next-line
  console.log(`${this.name} you can reach me via ${this.url} from ${country}`)
}

// highlight-next-line
let devDetails = developerDetails.bind(developer, "India");
devDetails(); // Abhin Pai you can reach me via www.abhinpai.github.io from India
```

We can also pass the additional parameters via `bind` methods like `call` and `apply`

## Method Chaining
----

There are different reasons for method chaining for different people. One of the major reasons for chaining methods is to ensure a cleaner and more readable code

Method chaining is a mechanism of calling a method on another method of the same object

```js
class SnacksFactory {
  constructor() {
    this.ingredients = [];
  }

  addIngredient = (ingredient) => {
    this.ingredients.push(ingredient);
    // highlight-next-line
    return this;
  }

  getIngredients = () => {
    if (!this.ingredients.length) {
     console.log('There is no ingredient in this recipe');
   } else {
     console.log(this.ingredients.toString());
   }
  }
}

 const snacks = new SnacksFactory();

 snacks
 .addIngredient(🍟)
 .addIngredient(🍔)
 .addIngredient(🥪)
 .getIngredients(); // [🍟, 🍔, 🥪]
 ```

 In the above example, we highlighted the `addIngredient` method which returns the current object i.e `this` which enables us to chain the methods. If we don't return `this` from the method `addIngredient` chining will throw an exception

 ## Scheduling: `setTimeout` and `setInterval`
 ----

 Any activity that is planned at a future time interval is generally referred to as scheduling. Both functions allow you to execute a piece of JavaScript code/function at a certain point in the future.

### setTimeout()

The setTimeout() function is used when you wish to run your JavaScript function after a specified number of milliseconds from when the setTimeout() method was called.

```js
window.setTimeout ( expression, timeout, param1, param2, ... );
// OR
setTimeout(expression, timeout, param1, param2, ...);

// NOTE: the params are optional
```

#### setTimeout() with expression

where expression is the JavaScript code to run after the timeout milliseconds have elapsed. The params are optional.

```js
setTimeout("console.log('Hello Developer')", 2000);
```

In the above snippet **Hello Developer** will print after 2 seconds

#### setTimeout() with function

```js
setTimeout(function() {
   console.log('Hello Developer 🙋🏻‍♂️');
 }, 4000);

// OR

 function message() {
    console.log('Hello Developer 🙋🏻‍♂️');
}

setTimeout(showMotivation, 4000);
 ```

 **NOTE**: The function name 'message' does not have brackets when passed in as a parameter to the setTimeout function.

 When we invoke setTimeout it will return unique Id, which can be used for the tracking purpose. If any need to clear the timeout we can use that id to do so

 ```js
let timeoutId = setTimeout("console.log('Hello Developer')", 2000);
// highlight-next-line
clearTimeout(timeoutId);
```

### setInterval()

The setInterval() function, as the name suggests is commonly used to set a delay for functions that are executed repeatedly. The setInterval() function is very closely related to setTimeout() and they even have same syntax

```js
setInterval ( expression, interval, param1, param2, ... );
```

The only difference is,

setTimeout() triggers the function call once. While the setInterval() triggers the function repeatedly after the specified interval of time.

similar to the setTimeout, setInterval function will also return unique id to track which can also be used to create the expression from memory

## Function Composition
----

We may find a situation where we need to use have a composition of multiple functions to do a job. for example, I want to format a string inside an HTML element by removing all the blank space, converting it to lowercase.

```js {12}
function trimString(str) {
  return str.trim();
}

function convertString(str) {
  return str.toLowerCase();
}

function formatString(str) {
  return `<div>${str}</div>`;
}
let result = formatString(convertString(trimString('    Hello Hackers     ')));
console.log(result); // "<div>hello hackers</div>"
```

If you observe above code snippet a `formatString` method takes the output from `convertString` and which takes the output from `trimString` where we pass an actual `string`. This is nothing but `function composition`

But, there is a problem here this code looks a bit messy and but we can write clean code by using `Arrow Function`

```js {5}
const trimString = (str) => str.trim();
const convertString = (str) => str.toLowerCase();
const formatString = (str) => `<div>${str}</div>`;

let result = formatString(convertString(trimString('    Hello Hackers     ')));
console.log(result); // "<div>hello hackers</div>"
```

Now, it looks clean and crystal. but still, we are leaving with one more problem here. That is the readability of code if you see the highlighted code in above code snippet we have to read it from right to left which is kind of weird but we can simplify that as well using `Lodash`

A `Lodash` is a utility library for a javascript

Let's use `Composition` and `Pipe` from `Lodash` Library

```js 
// highlight-next-line
import { composition } from 'lodash/fp';

let trimString = (str) => str.trim();
let convertString = (str) => str.toLowerCase();
let formatString = (str) => `<div>${str}</div>`;

// highlight-next-line
const compositedFunction = composition(formatString, convertString, trimString);

// highlight-next-line
let result = compositedFunction('    Hello Hackers     ');
console.log(result);
```

In the above example, we used `composition` from `lodash/fp` where `fp` stands for `Functional Programming`. 

`composition` is a high order function which takes a function as an argument and returns a composited function and later we can use the single composited function in which we need to pass a string


But still, we have not our actual problem of readability that we can solve using `pipe`

```js
// highlight-next-line
import { pipe } from 'lodash/fp';

let trimString = (str) => str.trim();
let convertString = (str) => str.toLowerCase();
let formatString = (str) => `<div>${str}</div>`;

// highlight-next-line
const compositedFunction = pipe(trimString, convertString, formatString);

// highlight-next-line
let result = compositedFunction('    Hello Hackers     ');
console.log(result);
```

Like `composition` `pipe` also a high order function which takes functions as arguments but now we solved our problem.


## Function Currying 
----

So far we have learned about the function and came to know that the functions are the first-class citizen in the Javascript Programming language. And we also know the one function can accept n number of arguments and we can return almost anything from a function like any primitive values, objects or function itself

`Currying` is a function of many arguments that are rewritten such that it takes the first argument and returns a function which in turn uses the remaining arguments and returns the value.

Confused haan!! Lets dive dipper 

Let's understand using code snippet

```js
function Multiplication(value1, value2) {
  return value1* value2;
}
```

The above snippet contain a simple function which takes two input and multiply and then return the value

Lets see now Function currying using `closures`.

```js
function Multiplication(value1) {
  return function (value2) {
    return value1 * value2;
  };
}
let mul = Multiplication(2); // Where mul is a function returned by Multiplication
mul(5); // Return is 10
```

We can further simplify the above code by rewriting something like this 

```js
function Multiplication(value1) {
  return function (value2) {
    return value1 * value2;
  };
}
Multiplication(2)(5); // Return is 10
```

<p align='center'>
<img className="gif-img" src={useBaseUrl('https://firebasestorage.googleapis.com/v0/b/pai-profile.appspot.com/o/gifs%2Ffunction-curry.gif?alt=media&token=85c5fd1f-0110-488a-901c-38921bd746ae')}  alt='function currying' />
</p>

### So why Currying?

It makes use of code reusability. Less code, Less Error. You may ask how it is less code?

**Yes** we with the power of Arrow Function we still trim the no of a line to achieve function currying

```js
const Multiplication = (value1) => (value2) => value1 * value2;
Multiplication(5)(10); // Return 50
```

Woooow, it's just two lines of code that's great 🤩

<p align='center'>
<img className="gif-img" src={useBaseUrl('https://firebasestorage.googleapis.com/v0/b/pai-profile.appspot.com/o/imgs%2Ffunction_curry.png?alt=media&token=df387c49-7ac5-4310-a9a7-65af9f01c5d7')}  alt='function currying using arrow' />
</p>


### Function currying using `function binding` method (`bind`)

We already came across the `bind` method by which we can also achieve currying

```js {5}
function Multiplication(value1, value2) {
  return value1 * value2;
}

let mul = Multiplication.bind(this, 2);
mul(5); // Return 10 
```

