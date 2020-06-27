---
id: module3_object
title: Hello i am an Object 👋
sidebar_label: "Module 3: Object"
description: Object description
--- 

import useBaseUrl from '@docusaurus/useBaseUrl';

:::note Possible Interview Questions 🔎
  1. What is `this`? hows that works?
  2. Why do we bind `this` key word in react application? <br/>
     _we use `class-based components` we need to bind this keyword to the class. Because the method we are passing to the event Handler is invoked in the global environment where this keyword refers to the window object._
  3. How object works in javascript?
  4. How to make a object property undeletable?
  5. const vs Object.freeze()
  6. What are the different ways to clone an object?
  7. Shortcut method to declare an object
  8. What are the different ways to access an object properties
  9. Object.is() vs ===
  10. What are the different ways to check the existence of object property
  11. How do you loop over Objects
  12. Object to primitive conversion
:::

## What the hell is `this` 😨 

In simple word `this` is the object that is executing in current context. 

Not understanding it right let me tell you in this way. 

`this` in **module 3** is quite interesting it contains quite lot of crazy stuffs. In statement this is referring to the **module 3** which means **module 3** is my current context. Now i hope you got some hint 😊

:::caution Remember 
The value of `this` will differ how a function is invoke. So its hard to judge the value of `this`
:::


There are 5 thumb rule for `this` which decide the value of `this` object
  1. Simple Function Call
  2. Implicit Binding
  3. `new` Binding
  4. Explicit Binding 
  5. Arrow function


### 1. Simple Function Call

If the this is part of regular / Simple function then `this` will refer to `window` object in browser and `global` object in node 

```js
function playSong() {
  console.log(this);
}

playSong(); // Window {parent: Window, opener: null, top: Window, length: 2, frames: Window, …}
```

### 2. Implicit Binding 

If the function is part of an object (We call it as a method) `this` will refer to a same function 

```js 
const marvel = {
  hero: "Hulk",
  heroName() {
    console.log(this);
  }
};

// Referring to an object
marvel.heroName(); // {hero: "Hulk", heroName: ƒ}  
```

We can also extend the object by adding the new method but still `this` will refer to the same object

```js 
const marvel = {
  hero: "Hulk",
  heroName() {
    console.log(this);
  }
};

// Referring to an object
marvel.heroName(); // {hero: "Hulk", heroName: ƒ}  

marvel.favAttack = function() {
  console.log(this); // {hero: "Hulk", heroName: ƒ, favAttack: f}  
}
```
Let's see one more example 

```js 
let song = {
  song: 'Seven Nation Army',
  fileType: ['mp3', 'mpeg', 'mp4'],
  play() {
    this.fileType.forEach(function(arg) {
      console.log(this.song + " -> " + arg) // trying to print song name and fileType
    })
  }
}

song.play(); // undefined -> mp3, undefined -> mpeg, undefined -> mp4
```
If you see the above example i got undefined why is that? 😢

**Answer** is we have `forEach` loop inside the `play()` and only `play()` method is member of `song` object where as `forEach` is member of global/window object

```js 
let song = {
  song: 'Seven Nation Army',
  fileType: ['mp3', 'mpeg', 'mp4'],
  play() {
    this.fileType.forEach(function(arg) {
      console.log(this) // Window {parent: Window, opener: null, top: Window, length: 2, frames: Window, …}
    })
  }
}

song.play(); // Window {parent: Window, opener: null, top: Window, length: 2, frames: Window, …}
```

To solve that what we can do is, Since forEach accept callback method and thisArg we can pass the `this` object to solve our problem

```js 
let song = {
  song: 'Seven Nation Army',
  fileType: ['mp3', 'mpeg', 'mp4'],
  play() {
    this.fileType.forEach(function(arg) {
      console.log(this.song + " -> " + arg) 
    }, this) // we passed `this` i.e song object
  }
}

song.play(); // Seven Nation Army -> mp3, Seven Nation Army -> mpeg, Seven Nation Army -> mp4
```

### 3. `new` binding / Constructor function

If we create an object for a constructor function using `new` keyword this will refer to the construction function instead of global/window object.

This is because when we use `new` key word it will create an object `{}` and bind the function property that we defined

```js 
function SpaceOrganization(organization) {
  this.organization = organization;
  console.log(this);
}

var org = new SpaceOrganization('ISRO  🛰 🚀'); // SpaceOrganization {organization: "ISRO  🛰 🚀"}
```
 
In the above example it created an empty object i.e `{}` and bind `organization` into that 


### 4. Explicit Binding

We can explicitly tell the JS engine to set this to point to a certain value using `call`, `apply` or `bind`.

`call` and `apply` can be used to invoke a function with a specific value for this

```js 
let marvel = {
  hero: "Hulk"
};

function heroName() {
  console.log(this);
}

// Referring to an object
heroName.call(marvel); // {hero: "Hulk"}

heroName.apply(marvel); // {hero: "Hulk"}
```

Both `call` and `apply` accomplish the same purpose. The first arg is the object which it want to refer in out case `marvel`

`bind` is used to create a new function that’s permanently bound to a this value.

```js 
let marvel = {
  hero: "Hulk"
};

function heroName() {
  console.log(this);
}

let myHero = heroName.bind(marvel);
myHero(); // {hero: "Hulk"}
```


:::info Strict mode `use strict` and `this`
  `this` work differently in strict mode `use strict`
:::


### 5. Arrow function / Lexical environment

With arrow functions, this keeps the same value as its parent scope i.e and Object `space`

```js
let space = {
 org: "ISRO 🛰 🚀",
 SpaceOrganization() {
  console.log(this.org);
 },
  NationalSpaceOrg: () => {
    console.log(this.org);
   }
};
space.SpaceOrganization(); //ISRO  🛰 🚀
space.NationalSpaceOrg(); // SpaceOrganization {organization: "ISRO  🛰 🚀"}
```

:::danger TBU
Update with vid or image. The detailed view of Arrow function
:::

## Object

Everything in javascript is `Objects` and `Primitive`.

We have seen lots of example with respect to object and there are multiple ways to create an objects 

```js
// Simple object creation
let myHero  = { hero: "Iron Man" };

// Creating object with accessor
let myHero;
myHero.hero = "Iron Man";

// using new keyword
function myHero (){}
var mySuperHero = new myHero();
mySuperHero.Name = "Iron Man";
``` 

### Shorthand technique to declare an Object 

If we want to create an object with a same key then we can declare something like this

```js
let bike = "KTM";
let car  = "Camaro";
let airplane = "Boeing 777";

let vehicle = {
  bike,
  car,
  airplane,
}

console.log(vehicle); //{bike: "KTM", car: "Camaro", airplane: "Boeing 777"}
```

### Technique to deep cloning an object 🧑🏻‍🤝‍🧑🏻

Cloning an objet without disturbing the original one is bit crazy in java script

```js
let myHero  = { hero: "Iron Man" };
console.log(myHero); // hero: "Iron Man" }

let superHero = myHero;
superHero.hero = "Thor";
console.log(myHero); // hero: "Thor" }
```

If you see above sample code, if i change cloned object even the original object get affected this is because of both object is referring to the same address in the memory, even if we loop through and put property into the item will not solve our problem 

:::info Object Behavior
  1. A loop that copies each property to a new object would only copy enumerable properties on the object. Enumerable properties are properties that will show up in `for` loops and `Object.keys`. 

  2. The copied object has a new `Object.prototype` method, which is not what you want when you copy an object.

  3. If your object has a property that is an object, your copied object will actually refer to the original instead of creating an actual copy. This means that if you change that nested object in the copied object, the original gets changed as well.
  4. Any property descriptors are not copied. If you set things like `configurable` or `writable` to `false`, the property descriptors in the copied object will default to `true`.
:::

to avoid that we have multiple solution those are like below

#### 🔸 Object.assign
new static method on the Object constructor: Object.assign. This new method allows to easily copy values from one object to another.

```js 
let marvelHero = { name: "Captain America" };

let clone = Object.assign({}, marvelHero);

console.log(Object.is(clone, marvelHero)); // false
```

:::caution Remember
only an object's enumerable properties will be copied over with Object.assign.
:::

#### 🔸 Using third party lib 

Using `Lodash` Clone And Clonedeep

```js
const clone = require('lodash/clone'); 
const cloneDeep = require('lodash/clonedeep');

let heo  = { hero: "Iron Man" };
let marvel = { villain: "Thanos", hero: hero };

const marvelShallowCopy = clone(marvel);
marvelShallowCopy.villain = "Ultron";

console.log(marvelShallowCopy.villain); // Ultron
console.log(marvel.villain); // Thanos

const marvelDeepCopy = clonedeep(marvel);
marvelDeepCopy.villain = "Ultron";

console.log(marvelDeepCopy.villain); // Ultron
console.log(marvel.villain); // Thanos
```

:::danger 
1. Add Object ref image (How normal object copy work)
2. Add other technique to copy an object
:::


### Technique to check existence of object property

#### 🔸 hasOwnProperty() 
```js
const hero = {
  name: 'Batman'
};

hero.hasOwnProperty('name');     // true
hero.hasOwnProperty('realName'); // false
```

#### 🔸 `in` operator

```js
const hero = {
  name: 'Batman'
};

'name' in hero;     // true
'realName' in hero; // false
```

#### 🔸 Comparing with undefined

```js
const hero = {
  name: 'Batman'
};

hero.name;     //  'Batman'
hero.realName; //  undefined

hero.name !== undefined;     // true
hero.realName !== undefined; // false
```

### Type of Object Properties

#### 🔸 Data Properties
A very common most widely used way

```js
let google = { ceo: "Sundar Pichai" };
// Here ceo is data property 
```

#### 🔸 Accessor Properties

This properties can understood as getter and setter similar to other modern programming languages

```js
// Traditional way
let google = { ceo: "Sundar Pichai" }; 
console.log(google.ceo) // Sundar Pichai

// With getter
let google = {get ceo() { return "Sundar Pichai"}};
console.log(google.ceo) // Sundar Pichai

let google = {
  name: "Sundar Pichai",
  get ceo() {
     return name;
     },
  set ceo(name) {
     this.name = name;
  }
};

google.ceo = "Abhin Pai";
console.log(google.name); // Abhin Pai
```

If we try to set a name in a objet in which we declared get than new value is can not set and vice versa

```js
let google = {
  name: "Sundar Pichai",
  get ceo() {
     return name;
     }
};

google.ceo = "Abhin Pai";
console.log(google.name); // "Sundar Pichai";
// Value is not set to Abhin Pai
```

#### Conventional private property 

```js
let google = {
  get ceo() {
     return _name;
     }, 
  set ceo(name) {
     this._name = name;
  }
};

google._name = "Abhin Pai";
console.log(google._name); // "Abhin Pai";
```

#### 🔸 Computed Properties
Computed Property Names” feature allows you to have an expression (a piece of code that results in a single value like a variable or function invocation) be computed as a property name on an object.

```js
function myLog (key, message) {
  return {
    [key]: message
  }
}

myLog("randomKey", "Hello Pai"); // {"randomKey": "Hello Pai"} 
```

Computed Properties is very help ful when we want to generate a random key for an object 


### Object Property Descriptors 

Every key in object will have `Property Attribute` that define the characteristics of the value associated with the key.They can also be thought of as meta-data describing the key-value pair. In short, attributes are used to define and explain the state of object properties.

:::danger TBU
Add a object property descriptors image
:::

<!-- <p align='center'>
<img src={useBaseUrl('img/codeshot/object_1.png')}  alt='null Propagation' />	
</p> -->

There are total **6** property attribute

#### 🔸 [[Value]]
It stores the value retrieved by a get access of the property. Which means that when we do object.x in the above example, we actually retrieve its [[Value]] attribute. Any dot-access or square-bracket access of a Data property will work in this way.

#### 🔸 [[Get]]
It stores the reference to the function that we declare while making a getter property. 

#### 🔸 [[Set]]
It stores the reference to the function that we declare while making a setter property.

#### 🔸 [[Writable]]
This is a `boolean` value. It tells whether we can overwrite the value or not. If false, attempts to change the property’s value will not succeed.

#### 🔸 [[Enumerable]]
This is also a boolean value. This attribute dictates whether the property is going to appear in for-in loops or not. If true, the for-in loop will be able to iterate on this property.

#### 🔸 [[Configurable]]
This is a boolean too. when its false following things will take place
  * `delete` property is not possible
  * Converting a Data Property to be an Accessor Property or vice-versa will fail
  * It will also prevent further changing the attributes values. That is, current values of enumerable, configurable, get or set will become fixed.
  * When the property is a Data Property, you can only set writable from true to false.
  * Before writable becomes false, you can also change its [[Value]] attribute. However, once writable is false, and configurable is false too, the property becomes unwritable, undeletable and unchangeable.

#### All six properties do not exist for each property type.
* For Data Properties, only `value`, `writable`, `enumerable` and `configurable` exists.
* For Accessor Properties, instead of value and writable, we have `get` and `set`.

:::info Why have we wrapped the attribute names in [[]] 🤷🏻
 Double square brackets mark internal properties used by the ECMA specifications. These are properties that JS programmer cannot touch directly from within the code. To manipulate internal properties, we’d need to use methods provided to us by the language.
:::

### Working with Descriptors 🛠

#### 🔸 Object.getOwnPropertyDescriptors

This method returns either undefined or an object containing the descriptors

```js 
let myBio = { nationality: 'Indian' };
Object.getOwnPropertyDescriptors(myBio)

/* {
  configurable: true
  enumerable: true
  value: "Indian"
  writable: true
} */
```

#### 🔸 Object.defineProperty

It’s a static method on Object that can define or modify a new property on a given object. It takes three arguments — the object, the property name, and descriptors. It returns the modified object.

```js
const myBio = {};

Object.defineProperty(myBio, 'age', {
  value: 24
});

console.log(myBio); //  { }

console.log(myBio.age); // 24

Object.defineProperty(myBio, 'name', {
  value: 'Abhin Pai',
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(myBio.name); // Abhin Pai

myBio.name = "Pai";

console.log(myBio.name); // Abhin Pai its not updated because writable is false
```

### Protecting an Object 🔐

We may find a use case to avoid tempering our object and JS have flexibility to do so with these following methods

#### 🔸 Object.preventExtensions
The Object.preventExtensions method prevents new properties from ever being added to an object. It takes an object and makes it non-extensible

```js 
let myBio = { name: 'Abhin Pai' };
Object.preventExtensions(myBio);
obj.name = 'Pai';
console.log(myBio.name); // Abhin Pai
```

#### 🔸 Object.seal

The `seal` method seals an object which It prevents new properties from being added just like `Object.preventExtensions`.

* It marks all existing properties as non-configurable
* Values of present properties can still be changed as long as they are writable.
* In short, it prevents adding and/or removing properties.

```js 
let myBio = { name: 'Abhin Pai' };
Object.seal(myBio);
delete obj.name; // doesn't work
```

#### 🔸 Object.freeze

provide maximum protection any object can have in JavaScript. Internally it seal the object using `Object.Seal`

* It also prevents modifying any existing properties at all.
* It also prevents the descriptors from being changed as the object is already sealed.

```js 
let myBio = { name: 'Abhin Pai' };
Object.freeze(myBio);
delete obj.name; // doesn't work
```

|                          | Create | Read | Update | Delete |
|--------------------------|-------|------|--------|--------|
| Object\.freeze           | ❌     | ✅    | ❌      | ❌      |
| Object\.seal             | ❌     | ✅    | ✅      | ❌      |
| Object\.preventExtension | ❌     | ✅    | ✅      | ✅      |

### Other Object Methods

#### 🔸 Object.Keys

The Object.keys static method returns an array with the property keys on an object. This method can be really useful in allowing to use a for…of loop over an object

```js
const sports = {
  basketBall: '⛹🏻‍♂️',
  swimming: '🏊🏻‍♀️',
  cycling: '🚴🏻‍♂️',
  golf: '🏌🏻‍♀️'
}

console.log(Object.keys(sports)); // ["basketBall", "swimming", "cycling", "golf"]


//Loop through object keys
for (let k of Object.keys(myObj)) {
  console.log(`Hey ${ myObj[k] }!`);
}
```

>Note that in the array returned from Object.keys, the keys won't necessarily be in order.


#### 🔸 Object.values

Object.values takes an object and returns an array with the values, in the same order that a for…in loop would give us

```js
const sports = {
  basketBall: '⛹🏻‍♂️',
  swimming: '🏊🏻‍♀️',
  cycling: '🚴🏻‍♂️',
  golf: '🏌🏻‍♀️'
}

const allSports = Object.values(sports); 
console.log(allSports) // ["⛹🏻‍♂️", "🏊🏻‍♀️", "🚴🏻‍♂️", "🏌🏻‍♀️"]
```

#### 🔸 Object.is

`Object.is()` behaves almost same way as `===`

```js
007 === 007;    // => true
007 === '007';  // => false
007 === true; // => false

Object.is(007, 007);    // => true
Object.is(007, '007');  // => false
Object.is(007, true); // => false
```

Object.is(arg1, arg2) checks the arguments for equality the same way as the strict equality operator, but with the 2 differences.

* Firstly, NaN equals to another NaN value
```js
Object.is(NaN, NaN); // true
Object.is(NaN, 007);   // false
```

* `Object.is()` makes the distinction between -0 and +0

```js
Object.is(-0, +0); // false
```


#### 🔸 Object.entries
Object.entries returns an array with arrays of key-value pairs

```js
const sports = {
  basketBall: '⛹🏻‍♂️',
  swimming: '🏊🏻‍♀️',
  cycling: '🚴🏻‍♂️',
  golf: '🏌🏻‍♀️'
}
const entries = Object.entries(sports); 
console.log(entries); // [["basketBall", "⛹🏻‍♂️"],["swimming", "🏊🏻‍♀️"],["cycling", "🚴🏻‍♂️"], ["golf", "🏌🏻‍♀️"]]
```

#### 🔸 Object.isExtensible
Helps to check whether object is non-extensible or not If it returns true, you can add more properties to the object.

## null Propagation Operator / Optional Chaining `?.`
-----

Ensuring any object or variable is contain any value or not is primary focus area of any developer to get rid of application crashing. To rescue that 'null Propagation Operator' is a savior else we need to check each and every element explicitly

```ts 
const marvel = {
  movie: {
    infinityWar: {
      character1: "Iron Man",
      character2: "Captain America",
      character3: null,
    },
  },
};

// Traditional Way for null check
let character =
  marvel &&
  marvel.movie &&
  marvel.movie.infinityWar &&
  marvel.movie.infinityWar.character1; // Oops complex logic 😪

// Smart way with Optional Chaining
let character = marvel?.movie?.infinityWar?.character1; // Awesome thats soo simple 🤩

```

`lodash` can also help to solve this problem, with less unwanted complexity

```js 
import { get } from 'lodash'
const character = get(marvel, ['movie', 'infinityWar', 'character1'])
```

The optional chaining `?.` stops the evaluation and returns undefined if the part before `?.` is undefined or null.

:::caution We should use `?.` only where it’s ok that something doesn’t exist.

For example, if according to our coding logic movie and infinityWar object must be there, but character(n) is optional, then marvel.movie.infinityWar?.character1 would be better.

So, if user happens to be undefined due to a mistake, we’ll know about it and fix it. Otherwise, coding errors can be silenced where not appropriate, and become more difficult to debug.
:::


:::info Tips 😉 
Optional chaining also works with also works with functions and square brackets.

`obj?.[prop]` – returns `obj[prop]` if obj exists, otherwise undefined <br/>
`obj?.method()` – calls `obj.method()` if obj exists, otherwise returns undefined 
:::


<!-- jsx -->

export const CustomStyledText = ({children, styleClass}) => (
  <p className={styleClass}>{children}</p>
); 




