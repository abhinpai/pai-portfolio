---
id: module7_classes
title: Its a Classsssss 😎
sidebar_label: "Module 7: Class"
---

:::note Questions 🤔
1. Is it possible to have multiple constructor in a class?
2. How do you declare private and static fields in the class
3. How static fields work behind the scene
4. How do you access instance fields from static method?
5. How to achieve protect fields in js?
6. What do you mean by synthetic sugar?
:::

## Synthetic Sugar 🤔

Syntactic sugar is shorthand for communicating a larger thought in a programming language.

In laymen term. At first sight if you see any acronym it may blow out your mind thinking what it is. ex, `lol` which means `Laughing Out loud` similarly in programming language we often use `...` spread or rest operator if you don't know what will you call it then how will you search? 🧐

You may search something like this - `js curly braces with 3 dots in front of object` woooow 🤦🏻‍♂️

To solve this problem programming community provided some shorthand solution that is nothing but `SYNTHETIC SUGAR`

it’s a balancing act between actually being concise, and making your code readable for others and your future self.

## Defining Class

Just like any other programming language class is blueprint for an object which can be create using `class` keyword.

In javascript its `synthetic sugar` over `prototypal inheritance`

```js
class Developer {
  // CLass body
}
```

In javascript class can be initialize to a variable

```js
const DeveloperClass = class Developer {
  // CLass body
};
```

and we can export a class as well

```js
export default class Developer {
  // CLass body
}
```

Inorder to create a instance `new` keyword will be used

```js
class Developer {
  // CLass body
}

const dev = new Developer();
console.log(dev instanceof Developer); // True
```

After `new Developer` object is created, when we call its method, it’s taken from the `prototype`, So the object has access to class methods.

:::danger
Add class to prototype picture
:::

## Constructor 🏗

Constructor is special method in a body of class that initialize the instances. In the constructor we usually initialize a variables or any kind of object setup (ex. Dependency Injection)

```ts
class Developer {
  constructor() {
    console.log(this); // Developer {}
  }
}

const dev = new Developer();
```

In the above code you can notice i am printing `this` which is referring to the instance of Developer class not a global object

```ts
class Developer {
  constructor(name) {
    this.name = name;
  }
}

const dev = new Developer("Abhin Pai");
console.log(typeOf(dev)); // "Object"
```

Here we have passed name as a argument to the constructor and inside the constructor body `name` is assigning to the `this.name`. Behind the scene it will create `Developer` class object and then it will add `name` as property

:::info Remember

- By default javascript will create an empty constructor if we don't add any constructor explicitly
- We can have multiple constructor in a class
:::

## Fields

Class fields are the variables that can hold some value

### Public instance

Lets take the above example. We have initialized the name to the `Developer` class instance and that property can be access outside the class which means its publicly available

```ts
class Developer {
  constructor(name) {
    this.name = name;
  }
}

const dev = new Developer("Abhin Pai");
console.log(dev.name); // "Abhin Pai"
```

But its not recommend way to directly initialize variable without declaring by which we may loose the accountability of the variable. Instead we can declare it first and then assign it

```ts
class Developer {
    let name;
    constructor(name) {
        this.name = name;
    }
}

const dev = new Developer("Abhin Pai");
console.log(dev.name); // "Abhin Pai"
```

### Private instance

Encapsulation is one of the most important aspect of Object Orient Programming to hide the internal feature of class.

One should be able to access the encapsulated fields only via interface provided by class.

To achieve this functionality `Private` field is JOHN RAY. These fields can be manipulate only by its parent class and for outer worlds this fields are anonymous

In Javascript to declare `Private` field we have special symbol i.e `#`

`#` prefix must be present when ever you deal with private field be it update, delete or read

```js
class Developer {
    #name;
    _age;
    constructor(name, age) {
        this.#name = name;
        this._age = age;
    }
    console.log(#name); // Abhin Pai
    console.log(_age); // 🤫
}

const dev = new Developer("Abhin Pai", 🤫);
console.log(dev.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class.
```

:::caution Remember

This is a recent addition to the language. `Not supported in JavaScript engines`, or supported `partially yet`, requires polyfilling.

- Private fields can only be declared up-front in a field declaration.
- Private fields cannot be created later through assigning to them, the way that normal properties can.
- We can't have both public and private fields in a single class
:::

:::note Some Interesting Gyan 😇

### Why was the sigil # chosen, among all the Unicode code points?

`@` was the initial favorite, but it was taken by `decorators`. TC39 considered swapping decorators and private state sigils, but the committee decided to defer to the existing usage of transpiler users.

`_` would cause compatibility issues with existing JavaScript code, which has allowed `_` at the start of an identifier or (public) property name for a long time.

And then what vote went to `#` 🏆

This proposal reached Stage 3 in July 2017. Since that time, there has been extensive thought and lengthy discussion about various alternatives. In the end, this thought process and continued community engagement led to renewed consensus on the proposal in this repository. Based on that consensus, implementations are moving forward on this proposal.

**Reference**
https://caniuse.com/#feat=mdn-javascript_classes_private_class_fields
:::

### Public static instance

If we want to access some class property without creating a class instance `static` field can help you on this.

For example if we want to have some class constant we can declare field with `static` and done you can access it without even creating new instance

`static` fields will be added to the class constructor at the time of class evaluation using `Object.defineProperty()` and the same will be access by the `constructor`

```js
class Theme {
    static ACTIVE_THEME = 'dark';
}
console.log(`What is the active theme ${Theme.ACTIVE_THEME}`); // What is the active theme dark
```

`static` fields are useful when you want a field to exist only once per class, not on every class instance you create. This is useful for `caches`, `fixed-configuration`, or any other data you don't need to be replicated across instances.

### Private static instance

Sometime you may find use case to hide a implementation of static field. In this regard you can make static field private

To make the static field private, prefix the field name with `#` 

```js
class Theme {
    static #CLASS_CONFIG = 'active';
}
```

### Protected

In many other languages there also exist `protected` fields: accessible only from inside the class and those extending it (like private, but plus access from inheriting classes). 

They are also useful for the internal interface. They are in a sense more widespread than `private` ones, because we usually want inheriting classes to gain access to them.

Protected fields are not implemented in JavaScript on the language level, but in practice they are very convenient, so they are emulated.

#### Protected properties are usually prefixed with an underscore `_`

That is not enforced on the language level, but there’s a well-known convention between programmers that such properties and methods should not be accessed from the outside.

```js
class PowerHouse {
    _powerState = "OFF";

    get powerState() {
        return this._powerState;
    }

    set powerState(state) {
        this._powerState = state;
    }
}

let state = new PowerHouse();
state.powerState = "ON";
console.log(state.powerState); // ON
```

## Methods

### Instance Methods

Instance method can be call via class instance and do the business operations. 

```js
class Developer {
    #name = "Anonymous";

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}
let dev = new Developer("Abhin Pai"); 
console.log(dev.getName()); // Abhin Pai
```

We can also make method as private similar to field by using `#` as prefix to the method

```js
class Developer {
    #name = "Anonymous";

    constructor(name) {
        this.#name = name;
    }

    #getName() {
        return this.#name;
    }

    getBio() {
        console.log(this.#getName()); // Abhin Pai
    }
}
let dev = new Developer("Abhin Pai"); 
dev.getBio();
```

### Getter and Setter

Getter and Setters. Getters and setters allow you to define Object Accessors 

The `get` syntax binds an object property to a function that will be called when that property is looked up.

The set syntax binds an object property to a function to be called when there is an attempt to set that property.

```js
class Developer {
    #name = "Anonymous";

    get Name() {
        return this.#name;
    }

    set Name(name) {
        this.#name = name;
    }
}
let dev = new Developer(); 
console.log(dev.Name); // Anonymous
dev.Name = "Abhin Pai"; // set the value using setter
console.log("Abhin Pai"); // Abhin Pai used getter
```

### Static Methods

The static methods are functions attached directly to the class. They hold logic related to the class, rather than to the instance of the class.

To create a static method use the keyword `static`. Behavior of static method is similar to the static field

:::info Remember
Thumb rule of static method

1. A static method can access static fields
2. A static method cannot access instance fields.
:::

```js 
class ThemeConfig() {
    static ACTIVE_THEME = "dark";

    static toggleTheme(theme) {
        ACTIVE_THEME = theme;
        console.log(ACTIVE_THEME); // light
    }
}
ThemeConfig.toggleTheme("light");
```

Static method can me private again they will follow the rules of encapsulation

### Computed Method Name

computed method name using brackets [...]

```js
class ThemeConfig() {
    let theme = "dark";

    ['active'+'theme']() {
        console.log(this.theme); // light
    }
}
let config = new ThemeConfig();
config.activetheme();
```

### Bound Method with class

Sometime we may required to bind a method to a class to access class fields. Its depends on the context of call

This is the least elegant solution, but it works. 

Drawbacks include having to keep track of which methods use this and need to be bound, or ensuring every method is bound, remembering to `.bind` new methods as they are added, and removing `.bind` statements for methods that are removed

```js
class Select {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  }
}

let select = new Select("hello");
select.click // undefined
```

The problem is called `losing this`. to solve it bind the method to object, e.g. in the constructor

```js
class Select {
  constructor(value) {
    this.value = value;
    this.click = this.click.bind(this);
  }

  click = () => {
    console.log(this.value);
  }
}

let select = new Select("hello");
select.click // hello
```

#### Auto Bind 

A similar but less painful approach is using a module that takes care of this on our behalf. Sindre’s auto-bind goes through an object’s methods and binds them to itself.

```js
class Select {
  constructor(value) {
    this.value = value;
    autoBind(this);
  }

  click = () => {
    console.log(this.value);
  }
}

let select = new Select("hello");
select.click // hello
```


## Inheritance 👴🏻 ⬅️ 🧔🏻 ⬅️ 👦🏻 ⬅️ 👶🏻

Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the existing.

JavaScript support single inheritance using the `extends` keyword

```js
class Professional {
    let developerName = "Abhin Pai";
    constructor(name) {
        this.developerName = developerName;
    }
}

class Bio extends Professional {
    let hobby = ["Gaming", "Travelling" "etc"];
}

let user = new Bio();
console.log(user.hobby); // ["Gaming", "Travelling" "etc"]
console.log(user.developerName); // Abhin Pai
```

:::danger   
Add the working illustration of `extends`
:::

:::info remember
Class syntax allows to specify not just a class, but any expression after `extends`

For instance, a function call that generates the parent class:

```js
function user(name) {
    console.log(name);
}

class Developer extends user("Abhin Pai") {
    // Class body
}
```

This might be useful for advance programming when some wants to create class dynamically on the fly

:::

### Parent Constructor: `Super()` 👌🏼

If you’d like to call the parent constructor in a child class, you need to use the `super()` 

```js
class Professional {
    let developerName;
    constructor(name) {
        this.developerName = developerName;
    }
}

class Bio extends Professional {
    let hobby = ["Gaming", "Travelling" "etc"];
    constructor(name) {
        super(name); // Calling constructor of parent class
    }
}

let user = new Bio("Abhin Pai");
console.log(user.hobby); // ["Gaming", "Travelling" "etc"]
console.log(user.developerName); // Abhin Pai
```

### Parent Instance: `Super()` in method

If you’d like to access the parent method inside of a child method, you can use the special shortcut `super`.

We can also override a method of parent class

```js
class Professional {
    let developerName;
    constructor(name) {
        this.developerName = developerName;
    }

    get Name() {
        return this.developerName;
    }
}

class Bio extends Professional {
    let hobby = ["Gaming", "Travelling" "etc"];
    constructor(name) {
        super(name); // Calling constructor of parent class
    }

    get Name(){ // override the method of parent class
        console.log(super.Name); // called parent method using super
    }

}

let user = new Bio("Abhin Pai");
console.log(user.hobby); // ["Gaming", "Travelling" "etc"]
console.log(user.Name); // Abhin Pai
```

> Arrow functions do not have `super`.