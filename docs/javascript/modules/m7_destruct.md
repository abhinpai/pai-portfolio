---
id: module7_destruct
title: Destructor 🔨
sidebar_label: "Module 7: Destructor"
---

:::note Questions 🤔
1. What is destruction?
2. How do you destruct an array?
3. How do you destruct an object?
4. How do you destruct a string?
5. How do you swap a variable using destruction?
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

It also has the flexibility to Alias a property

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

To avoid the risk of `Undefined` there is something cool feature i.e we can assign a default value. It's useful for the case where the pulled property evaluates to undefined

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

Array destruction uses square brackets `[]` and it's very similar to the object destruction 

```js
let [developer] = [👨🏻‍💻];
console.log(developer); // 👨🏻‍💻
```

Here also we can follow the default value and get the same result

```js 
let [developer] = [];
console.log(developer); // undefined 

let [developer = '👩🏻‍💻'] = []; // Assigned a default value
console.log(developer); // 👩🏻‍💻 
```

With an array, we have the additional benefit of skipping element

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


###  Destructing a "string"

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
import statements have different syntax. When compared against destructuring, none of the following import statements will work

* Use defaults values such as `import {pureComponent = component} from react` 
* `Deep destructuring` style like `import {component: { someOtherComponent }} from react` is not possible 
* Aliasing syntax `import {pureComponent = component} from react`
:::

## Spread Operator
------
<!-- 🔸 -->
`Spread syntax (...)` is another helpful addition to JavaScript for working with arrays, objects, and function calls. 

The spread allows objects and iterables (such as arrays) to be unpacked, or expanded, which can be used to make shallow copies of data structures to increase the ease of data manipulation

Spear unpack an array or object

### Spread with Arrays

Spread can simplify common tasks with arrays like concatenating or some other array manipulation 

```js
// Traditional way to concatenating an array
let animals = ['🦊', '🐻', '🐼', '🐯', '🦁'];
let birds = ['🦆', '🐔', '🐧', '🐦', '🐤'];

let leavingBeings = animals.concat(birds);
console.log(leavingBeings); //["🦊", "🐻", "🐼", "🐯", "🦁", "🦆", "🐔", "🐧", "🐦", "🐤"]

// Concatenating with spread operator 
let leavingBeings = [...animals, ...birds];
console.log(leavingBeings); //["🦊", "🐻", "🐼", "🐯", "🦁", "🦆", "🐔", "🐧", "🐦", "🐤"]
```
You can also use a spread operator with an array. 

```js
let animals = [ 
  { tiger: '🐯' },
  { lion: '🦁' },
];

let updateAnimal = [...animals, { wolf: '🦊' }];
console.log(updateAnimal); // [ {tiger: "🐯"}, {lion: "🦁"},  {wolf: "🦊"}]
```

Spread can also be used to convert a `set`, or any other `iterable`, or `String` to an `Array`.

```js
// Converting set into an array
let animals = new Set();

animals.add('Lion');
animals.add('Tiger');
animals.add('Wolf');

console.log(...animals); // [Lion, Tiger, Wolf]

// Converting an string to an array
let animalName = "Lion";
console.log(...animalName); // ['L', 'i', 'o', 'n']
```


### Spread with Object

When working with objects, the spread can be used to shallow copy and update objects.

```js
// Copying object with Object.Assign();
let animals = {tiger: '🐯', lion: '🦁' };
let copyAnimal = Object.assign({}, animals);

console.log(copyAnimal); // {tiger: "🐯", lion: "🦁"}

// Copy using spread operator 
let copyAnimal = {...animals};
console.log(copyAnimal); // {tiger: "🐯", lion: "🦁"}
```

#### Adding new property into an existing property

```js
let developer = {
  name: `Abhin Pai`,
  gadgets: ["📱", "🖥", "💻", "🖨"],
  nationality: { india: "🇮🇳" },
}

let userInfo = {...developer, blog: "www.abhinpai.github.io"};
console.log(userInfo); // {name: "Abhin Pai", gadgets: Array(4), nationality: {…}, blog: "www.abhinpai.github.io"}
```

:::caution Remember
One important thing to note with updating objects via spread is that any nested object will have to be spread as well

```js
let developer = {
  name: `Abhin Pai`,
  gadgets: ["📱", "🖥", "💻", "🖨"],
  nationality: { india: "🇮🇳" },
}

let userInfo = {...developer, gadgets: {smartWatch: '⌚️'}};
console.log(userInfo); // {name: "Abhin Pai", gadgets: {smartWatch: '⌚️'}, nationality: {…}}
```

In the above example, I tried to add smart-watch into existing gadget object but guess what it overwrites with the new value and we lost the original content

To achieve our result we can spread the inner object as well

```js
let developer = {
  name: `Abhin Pai`,
  gadgets: ["📱", "🖥", "💻", "🖨"],
  nationality: { india: "🇮🇳" },
}

let userInfo = {...developer, gadgets: {smartWatch: '⌚️', ...developer.gadgets}};
console.log(userInfo); // {name: "Abhin Pai", gadgets: {…}, nationality: {…}} 
```
:::




### Spread with function

We can also take advantage of spread operator in the function

```js
let developer = [
  { name: `Abhin Pai` },
  { gadgets: ["📱", "🖥", "💻", "🖨"] },
  { nationality: { india: "🇮🇳" } },
];

function printUser(name) {
  console.log(name); // Abhin Pai
}

printUser(...developer);
```

## Rest Operator
------

The syntax of the rest parameter is same as spread i.e `...` but rest do have the opposite effect 

Rest pack an array or object by creating an array of an indefinite number of arguments.

```js 
function gadgets(...args) {
  console.log(args); // ["📱", "🖥", "💻", "🖨"]
}

gadgets("📱", "🖥", "💻", "🖨");
```

Rest syntax can be used as the only parameter or as the last parameter in the list. If used as the only parameter, it will gather all arguments, but if it's at the end of a list, it will gather every argument that is remaining.

```js
function gadgets(mobile, monitor, ...args) {
  console.log(args); // ["💻", "🖨"]
  console.log(mobile);  // 📱
  console.log(monitor); // 🖥
}

gadgets("📱", "🖥", "💻", "🖨");
```

:::caution Remember
* One can't use rest in between parameter which will throw an exception

```js
function gadgets(...args, mobile) {
  console.log(args); // SyntaxError: Rest parameter must be last formal parameter
}

gadgets("📱", "🖥", "💻", "🖨");
```

* Older code, the arguments variable could be used to gather all the arguments passed through to which is not possible now with rest

```js
function gadgets() {
  console.log(arguments); // Arguments(4) ["📱", "🖥", "💻", "🖨", callee: ƒ, Symbol(Symbol.iterator): ƒ]
}

gadgets("📱", "🖥", "💻", "🖨");
```
:::