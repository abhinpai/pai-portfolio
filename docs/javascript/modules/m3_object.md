---
id: module3_object
title: Hello i am an Object 👋
sidebar_label: "Module 3: Object"
description: Object description
--- 

:::note Possible Interview Questions 🔎
  1. What is `this`? hows that works?
  2. Why do we bind `this` key word in react application? <br/>
     _we use `class-based components` we need to bind this keyword to the class. Because the method we are passing to the event Handler is invoked in the global environment where this keyword refers to the window object._
:::

## What the hell is `this` 😨 

In simple word `this` is the object that is executing in current context. 

Not understanding it right let me tell you in this way. 

`this` **module 3** is quite interesting it contains quite lot of crazy stuffs. In statement this is referring to the **module 3** which means **module 3** is my current context. Now i hope you got some hint 😊

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
Answer is we have `forEach` loop inside the `play()` and only `play()` method is member of `song` object where as `forEach` is member of global/window object

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


:::caution Strict mode and `this`
  `this` work differently in strict mode `use strict`
:::







### 4. Arrow function / Lexical environment

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

:::note We should use `?.` only where it’s ok that something doesn’t exist.

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

