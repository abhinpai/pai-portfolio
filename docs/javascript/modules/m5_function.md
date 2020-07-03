---
id: module5_function
title: Function
sidebar_label: "Module 5: Function"
---

:::note Possible Interview Questions 🔎
1. How arrow function is different from regular function
2. Explain `call`, `apply` and `bind`
3. What is IIFE
4. How do you return multiple values from a function
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
5. How do you use the optional argument with an optional callback
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
:::

## Regular Function

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

## Function Parameter

The function accesses the outer world using its parameters.

### Regular function parameters
A JavaScript function can have any number of parameters just like any other programming languages

### Default parameters
Default parameter is very useful in more complex application. When we dont have any clarity about the parameter what will that be then its better to define a default parameter.

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

`Arguments` is the special object, which holds all the inocation arguments in an array-like object for a function

```js
function helloDeveloper(){
    console.log(arguments);
}
helloDeveloper("This is sample arguments"); // Arguments ["This is sample arguments", callee: ƒ, Symbol(Symbol.iterator): ƒ]
```
### Rest parameters

`rest` parameter lets you collect all the arguments of the function call into an array.

Learn more about rest operator from this [link](module8_destruct#rest-operator)

```js
let developerInfo = (...args) => consol.log(`Hi there i am ${args[0]}, I am from ${args[1]}`);
developerInfo("Abhin Pai",  "India");
```

## Arrow (Fat Arrow) Function

Arrow functions are not just a `shorthand` for writing small stuff. They have some very specific and useful features.

We can come up with various scenario where we can find a function which executes somewhere in our service. In such a case, arrow functions will come handy

Its very simple to declare an and use arrow function

```js
let printMessage = () => console.log("Hello Hackers");
printMessage(); // Hello Hackers
```


:::caution Things to remember about Arrow Function
1. Arrow function do not have `this`. If we try to access `this` inside an arrow function then the function will give result `undefined`

```js
let MyObject = {
    name = "Abhin Pai",
    printMyName = () => { console.log("Hello")}
}

MyObject.printMyName(); // My name is undefined\
```

2. Arrow function can't be used as constructor function which you can't create any instance for an arrow function using `this`

3. Arrow have no `arguments` variable 

```js
function regularFunction(arg) { console.log(arguments)}
regularFunction("Hello There"); // Arguments ["Hello", callee: ƒ, Symbol(Symbol.iterator): ƒ]

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

2. `IIFEs` have there own scope i.e. the variables you declare in the Function Expression will not be available outside the function.
3. Similarly to other function `IIFEs` can also be named or anonymous, but even if an `IIFE` does have a name it is impossible to refer/invoke it
4. IIFEs can also have parameters
5. Explicitly it is not required to define return statements to an arrow function. Arrow function will do it for you out of the box

```js
(function WhatsTheTimeNow(date) { console.log()})(new Date().toTimeString());
```
:::

## Decorators and forwarding

A decorator is simply a way of wrapping one piece of code with another — literally `decorating` it. This is a concept you might well have heard of previously as functional composition, or higher-order functions.

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

For more details check out decorator example in [JavascriptInfo](https://javascript.info/call-apply-decorators)

## `Call`, `apply` and `bind`

:::danger TBU
Add content for call, apply and bind
:::