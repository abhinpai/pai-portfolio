---
id: module8_destruct
title: Destructor 🔨
sidebar_label: "Module 8: Destructor"
---

:::note Possible Interview Questions 🔎
1. What is destructing?
2. How do you destruct an array?
3. How do you destruct an object?
4. How do you destruct a string?
5. How do you swap an variables?
6. Destructuring Functions - Multiple returns and named defaults
:::

## Destructing Assignment
----

`Destructuring Assignment` is a syntax that allows you to assign object properties or array items as variables. 

This can greatly reduce the lines of code necessary to manipulate data in these structures. 

### Destructing an object {...}

`Object destructuring` is a bit different because keys are not necessarily in a specific order.

```js
let gadgets = { mobile: '📱', monitor: '🖥', laptop: '💻', printer: '🖨'};
let {mobile, monitor} = gadgets;

console.log(mobile); // 📱
console.log(monitor); // 🖥

// Shuffling the order 
let {monitor, mobile} = gadgets;

console.log(mobile); // 📱
console.log(monitor); // 🖥
```

#### 🔸 Aliasing the property

It also have an flexibility to Alias a property

```js
let gadgets = { mobile: '📱', monitor: '🖥', laptop: '💻', printer: '🖨'};
let {mobile: SmartPhone, monitor: LEDMonitor} = gadgets;

console.log(SmartPhone); // 📱
console.log(LEDMonitor); // 🖥
```
#### 🔸 Deep Property pulling 

We can also pull a property as deep as we want and we can alias that as well

```js
let gadgets = { smartPhone: { iPhone: '📱'}, monitor: { ledMonitor: '🖥'}};
let {smartPhone: { iPhone }, monitor : { ledMonitor: MyMonitor }} = gadgets;

console.log(iPhone); // 📱
console.log(MyMonitor); // 🖥
```

By default, properties that aren’t found will be undefined, just like when accessing properties on an object with the dot or bracket notation.

```js
let gadgets = { mobile: '📱', monitor: '🖥', laptop: '💻', printer: '🖨'};
let {watch} = gadgets;

console.log(watch); // undefined
```

#### 🔸 Assigning Default Value

To avoid the risk of `Undefined` there is something cool feature i.e we can assign a default value. Its useful for the case where the pulled property evaluates to undefined

```js
let gadgets = { mobile: '📱', monitor: '🖥', laptop: '💻', printer: '🖨'};
let {watch = '⌚️' } = gadgets;

console.log(watch); // ⌚️
```

#### 🔸 Pilling Computer Property Name

Another convenient aspect of destructuring is the ability to pull keys using [computed property names](module3_object#-computed-properties).


```js
let key = 'smartPhone'
let { [key]: iPhone } = { smartPhone: '📱' }

console.log(iPhone) // 📱
```

### Destructing an array [...]

Array destruction uses square brackets `[]` and its very similar to the object destruction 

```js
let [developer] = [👨🏻‍💻];
console.log(developer); // 👨🏻‍💻
```

Here also we can follow the default value and get a same result

```js 
let [developer] = [];
console.log(developer); // undefined 

let [developer = '👩🏻‍💻'] = []; // Assigned a default value
console.log(developer); // 👩🏻‍💻 
```

With array we have additional benefit of skipping element

```js
let occupation = ['👩🏻‍🔬', '🧑🏻‍💻', '👨🏻‍🏫'];
let [,,teacher] = occupation;

console.log(teacher); // 👨🏻‍🏫
```

#### 🔸 Nested Array Destructing
```js
let occupation = [['👨🏻‍💻', '👩🏻‍💻'],['👩🏻‍🔬']];
let [[maleDeveloper, femaleDeveloper], [scientist]] = occupation;

console.log(maleDeveloper);
console.log(femaleDeveloper);
console.log(scientist);
```


###  Destructing an "string"

```js
let message = "Hello to all developer 👋";
let [getOneChar = ''] = message;

console.log(getOneChar); // H
```

### Destructing an function 

#### 🔸 Destructing an function parameter

Destructuring can also be applied on function parameters to extract values and assign them to local variables

```js
let developer = {
  name: `Abhin Pai`,
  gadgets: ["📱", "🖥", "💻", "🖨"],
  nationality: { india: "🇮🇳" },
};

function getNameAndAddress({ name, nationality: { india } }) {
  console.log(`Developer Name is ${name} and he is from ${india}`);
}
getNameAndAddress(developer); // Developer Name is Abhin Pai and he is from 🇮🇳
```

#### 🔸 Returning multiple property

```js
function getNameAndAddress() {
  let developer = {
    name: `Abhin Pai`,
    gadgets: ["📱", "🖥", "💻", "🖨"],
    nationality: { india: "🇮🇳" },
  };
    return { name, nationality: { india } } = developer
  }
  var result = getNameAndAddress(); 
  console.log(`Developer Name is ${result.name} and he is from ${result.india}`);
```

### Swapping variables without using any third variable

```js 
// Traditional technique
function compute() {
  let valueA = 500;
  let valueB = 200;
  let temp;

  if (valueA > valueB) {
    temp = valueA;
    valueA = valueB;
    valueB = temp;
  }

  console.log(valueA); // 200
  console.log(valueB); // 500
}
compute();


// Smart way with Destructing
function compute() {
  let valueA = 500;
  let valueB = 200;

  [valueA, valueB] = [valueB, valueA];
  console.log(valueA); // 200
  console.log(valueB); // 500
}
compute();
```

😍 you can see a drastic amount of logic and number of lines is being reduced 


:::caution Destructing import statement
Even though import statements don’t follow destructuring rules, they behave a bit similarly. Whenever you’re writing module import statements, you can pull just what you need from a module’s public API

```js
import {pureComponent, component} from react;
```
import statements have a different syntax. When compared against destructuring, none of the following import statements will work

* Use defaults values such as `import {pureComponent = component} from react` 
* `Deep destructuring` style like `import {component: { someOtherComponent }} from react` is not possible 
* Aliasing syntax `import {pureComponent = component} from react`
:::