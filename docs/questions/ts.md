---
id: ts
title: 👨🏻‍💻 Typescript Questions
sidebar_label: "Typescript"
---

### 🔸 What is TypeScript and why would I use it in place of JavaScript?

**TypeScript** is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as *you type the code*. For a large JavaScript project, adopting TypeScript might result in more robust software, while still being deployable where a regular JavaScript application would run.

- TypeScript supports new ECMAScript standards and compiles them to (older) ECMAScript targets of your choosing. This means that you can use features of ES2015 and beyond, like modules, lambda functions, classes, the spread operator, destructuring, today.
- JavaScript code is valid TypeScript code; TypeScript is a superset of JavaScript.
- TypeScript adds type support to JavaScript. The type system of TypeScript is relatively rich and includes: interfaces, enums, hybrid types, generics, union and intersection types, access modifiers and much more. TypeScript makes typing a bit easier and a lot less explicit by the usage of type inference.
- The development experience with TypeScript is a great improvement over JavaScript. The IDE is informed in real-time by the TypeScript compiler on its rich type information.
- With the Typescript Config file i.e **tsConfig** we can enable we can build high quality error less code one of the is.  With strict null checks enabled (`--strictNullChecks` compiler flag) the TypeScript compiler will not allow undefined to be assigned to a variable unless you explicitly declare it to be of nullable type.
- To use TypeScript you need a build process to compile to JavaScript code. The TypeScript compiler can inline source map information in the generated .js files or create separate .map files. This makes it possible for you to set breakpoints and inspect variables during runtime directly on your TypeScript code.
- TypeScript is open source (Apache 2 licensed, see github) and backed by Microsoft. *Anders Hejlsberg*, the lead architect of C# is spearheading the project.

### 🔸 Explain generics in TypeScript

Generics are able to create a component or function to work over a variety of types rather than a single one.

```ts
/** A class definition with a generic parameter */
class Queue<T> {
  private data = [];
  push = (item: T) => this.data.push(item);
  pop = (): T => this.data.shift();
}

const queue = new Queue<number>();
queue.push(0);
queue.push("1"); // ERROR : cannot push a string. Only numbers allowed
```

### 🔸 Does TypeScript support all object oriented principles?**

The answer is **YES**. There are 4 main principles to Object Oriented Programming:

- Encapsulation,
- Inheritance,
- Abstraction, and
- Polymorphism.

TypeScript can implement all four of them with its smaller and cleaner syntax.

### 🔸 Is it possible to have abstract class in TS

**Yes** it is possible to create an Abstract class in TS and it's also possible to extend an abstract class in TS

```tsx
// Creating an abstract class with an abstract keyword
abstract class BaseEmployee { 
	abstract doWork(): void; // An abstrt method
	workStarted(): void { 
		console.log('work started.'); }
}
```

### 🔸 What shorthand operator do you use to tell TS that value will always exists

`!` is used to tell typescript that the value will always exist

```tsx {3}
<button id="sample">Click Me </button>

let button = docuement.getElementById("#sample")!; // By adding the suffix ! i am
// convensicing TS that this value will always present
```

### 🔸 What is a TypeScript Map file?

`.map` files are source map files that let tools map between the emitted JavaScript code and the TypeScript source files that created it. Many debuggers (e.g. Visual Studio or Chrome's dev tools) can consume these files so you can debug the TypeScript file instead of the JavaScript file.

What is getters/setters in TypeScript?

TypeScript supports `getters/setters` as a way of intercepting accesses to a member of an object. This gives you a way of having finer-grained control over how a member is accessed on each object.

```tsx
class foo {
  private _bar:boolean = false;

  get bar():boolean {
    return this._bar;
  }
  set bar(theBar:boolean) {
    this._bar = theBar;
  }
}

var myBar = myFoo.bar;  // correct (get)
myFoo.bar = true;  // correct (set)
```

### 🔸 Could we use TypeScript on backend and how?

Typescript doesn’t only work for browser or frontend code, you can also choose to write your backend applications. For example you could choose `Node.js` and have some additional type safety and the other abstraction that the language brings.

1. Install the default Typescript compiler

```tsx
npm i -g typescript
```

2. The TypeScript compiler takes options in the shape of a `tsconfig.json` or `tsconfig.js` file that determines where to put built files and in general is pretty similar to a babel or webpack config. 

```tsx
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "outDir": "build"
  }
}
```

3. Compile ts files 

```tsx
tsc
```

4. Run

```tsx
node build/index.js
```

### 🔸 Explain how and why we could use property decorators in TS?

Decorators can be used to modify the behavior of a class or become even more powerful when integrated into a framework. For instance, if your framework has methods with restricted access requirements (just for admin), it would be easy to write an `@admin` method decorator to deny access to non-administrative users, or an `@owner `decorator to only allow the owner of an object the ability to modify it.

```tsx
class CRUD {
    get() { }
    post() { }

    @admin
    delete() { }

    @owner
    put() { }
}
```

### 🔸 Explain how to create an decorator in TS

Using decorator there are 5 things which we can decorate using decorator

- Class definition
- Properties
- Accessors
- Methods
- Parameters


### 🔸 What is the use of decorators in TypeScript? Why its is required?

In TypeScript, decorators are used to offering a way to add both meta-programming syntax and annotations for members and declarations.

### 🔸 How to enable Decorators in TypeScript via command line?

To enable decorators in TypeScript, developers first have to enable the option of experimentalDecorators via command line or tsconfig.json.

- `$tsc --target ES5 --experimentalDecorators`
- For tsconfig.json, use the following syntax.`{ "compilerOptions": { "target": "ES5", "experimentalDecorators": true }}`


### 🔸 Explain when to use `declare` keyword in TypeScript

`Declare` keyword helps to declare something at global level which will be accessible throughout the application.

`declare` with some variable 

```tsx
declare let language: String = "EN";
```

Here language can access throughout the application similarly we can do with class or modules

```tsx
  declare namespace Theme {
    interface ITheme {
      // interface body
    }
  }
```

### 🔸 What are Ambients in TypeScripts and when to use them?

Is it possible to generate TypeScript declaration files from JS library? Is it possible to generate TypeScript declaration files from JS library?

### 🔸 What is the prototype in TypeScript?

The prototype property in TypeScript allows users to include methods and properties to an object. It allows cloning objects (complex ones also) without coupling to their specific classes. Prototype objects can create full copies due to the accessibility of objects to each other’s private field.

### 🔸 Declaring any of the external modules having no exposed types or values

`declare module 'Foo' { var x: any; export = x;}`

### 🔸 For declaring individual classes

```tsx
declare module 'Foo' { export type cls = any; export var cls: any;}
```

### 🔸 How to call typescript function from JavaScript?

Compiling Typescript into Javascript is done using a JS function. During this process of compiling, the code structure could be changed a bit. If you have multiple modules or classes in the typescript, then they would become a part of the path to call the specific function.

**Example**

```tsx
class Foo{ 
    constructor(){}
    public Bar = () : string => { return "This is a string"; }
}

module FooModule {
     export var FooInstance = new Foo();
}
```

If you would want to call this in Typescript, use this command:

```tsx
FooModule.FooInstance.Bar();
```

> The pages mentioned above have to be imported in a proper manner to call in Typescript.`

### 🔸 What are the data types in TypeScript?

This one is a regular TypeScript interview question that almost every candidate faces. Here are the basic data types present in TypeScript described below.

- **Number Types:** In TypeScript, number values are floating values which have a type of number. Users can assign any numeric value, including hexadecimal, binary, decimals, and octal literals also.
- **String Types:** When a user desires to implement textual data, string types will be needed. It gets denoted by the keyword string.
- **Boolean Types:** It is used for declaring variables and accompanied by the keyword boolean.
- **Enum Type:** It can be used for numeric values with friendly names. It is declared with the keyword of “enum.”
- **Void Types:** Used for the function that doesn’t return any value.
- **Null Types:** Used to declare a variable type null. It can be assigned to boolean and number value.
- **Undefined Types:** It is used to store the value undefined.
- **Any Types:** It can be implemented to ensure data value to declare said values.
- **Never Types:** It represents the data type of values that never occur.
- **Array Type:** Used to declare data arrays.
- **Tuple Types:** This data type allows users to create an array where the fixed number type elements are known but not the same.

### 🔸 What is the use of the `tsconfig.json` file in typescript? and Explain tsconfig properties

Developers add `tsconfig.json` file or TypeScript configuration file to a project to guide the compiler as the JavaScript files are generated by it. This file also contains flags and options that are essential to run Angular applications.

### 🔸 What are mixins in TypeScript?

Mixins are used in the creation of small and reusable objects in Typescript. You can now compose the selected objects into larger objects through multiple inheritances. Then, use it to share the common components between classes while reusing the components from one single class to parallelly run two classes in Typescript.

### 🔸 Is it possible to merge multiple `.ts` files into a single `.js` file?

**Yes**, it's possible. To successfully merge multiple TS files together in a JS file, use a module bundler system or a Gulp Script to concatenate everything into a single JS file.

### 🔸 Why are optional parameters added in TypeScript?

Developers can use the optional parameter to declare parameters in function optional so that the requirement to pass the value to optional parameters gets eliminated. We have to use “?” at the end of a parameter to mark it optional as just shown below.

```js
function functionName(par1: number, par2?: number) {}
```

### 🔸 What is TypeScript Definition Manager and why do you need it?

When using TypeScript, you will need TypeScript definition files to work with external libraries. TypeScript Definition Manager (**TSD**) is a package manager to search and install TypeScript definition files directly from the community driven **DefinitelyTyped** repository.

Consider we need typings file for `jQuery` so that we can use jQuery with TypeScript. This command, `tsd query jquery --action install` (we need to have `tsd`installed), finds and install the typings file for `jQuery`. Now we can include the below directive at the top of the file where we want to use `jQuery`.

TSD is now offically deprecated, and we should use typings instead.

```tsx
/// <reference path="typings/jquery/jquery.d.ts" />
```

### 🔸 How to generate TypeScript definition file from any `.ts` file?

You can generate TypeScript definition file from any `.ts` file via tsc compiler. Generating a TypeScript definition will make your TypeScript file reusable.

```tsx
tsc --declaration file1.ts
```

### 🔸 What is Type assertions in TypeScript?

A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that we have performed any special checks that we need.

```tsx
	let phone: number = (someNo).length
```

### 🔸 What is as syntax in TypeScript?

The as is additional syntax for Type assertion in TypeScript. The reason for introducing the as-syntax is that the original syntax (`<type>`s) conflicted with JSX.

when using TypeScript with JSX, only as-style assertions are allowed.

### 🔸 What is Compilation Context?

The compilation context is basically grouping of the files that TypeScript will parse and analyze to determine what is valid and what isn’t. Along with the information about which files, the compilation context contains information about *which compiler* options. A great way to define this logical grouping is using a `tsconfig.json` file.

A `tsconfig.json` will have compilerOptions for to handle the compilation context

### 🔸 What is Triple-Slash Directive? What are some of the triple-slash directives?

Triple-slash directives are single-line comments containing a single XML tag. The contents of the comment are used as compiler directives.

Triple-slash directives are **only** valid at the top of their containing file. A triple-slash directive can only be preceded by single or multi-line comments, including other triple-slash directives. If they are encountered following a statement or a declaration they are treated as regular single-line comments, and hold no special meaning. Below are some of the triple-slash directives in TypeScript:

- The `/// <reference path="..." />` directive is the most common of this group. It serves as a declaration of dependency between files. Triple-slash references instruct the compiler to include additional files in the compilation process. If the compiler flag `--noResolve` is specified, triple-slash references are ignored; they neither result in adding new files, nor change the order of the files provided.
- Similar to a `/// <reference path="..." />` directive, this directive serves as a declaration of dependency; a `/// <reference types="..." />` directive, however, declares a dependency on a package. For example, including `/// <reference types="node" />` in a declaration file declares that this file uses names declared in `@types/node/index.d.ts`; and thus, this package needs to be included in the compilation along with the declaration file.

What is JSX? Can we use JSX in TypeScript?

JSX is an embeddable XML-like syntax. It is meant to be transformed into valid JavaScript. JSX came to popularity with the React framework. TypeScript supports embedding, type checking, and compiling JSX directly into JavaScript.

In order to use JSX in our file: we must name our file with a `.tsx` extension and should enable `jsx` option.

What are all the JSX modes TypeScript supports?

TypeScript ships with three JSX modes: `preserve`, `react`, and `react-native`.

The `preserve` mode will keep the JSX as part of the output to be further consumed by another transform step (e.g. *Babel*). Additionally the output will have a `.jsx` file extension. The `react` mode will emit `React.createElement`, does not need to go through a JSX transformation before use, and the output will have a `.js` file extension. The `react-native` mode is the equivalent of preserve in that it keeps all JSX, but the output will instead have a `.js` file extension.


### 🔸 Is it possible to generate TS declaration file from JS

`Yes`, declaration file is required inorder for the Typescript compiler to understand the Javascript.

### 🔸 What is the purpose of Typescript declaration file

Fantastic `Moment.js` Example

Lucky for us, the `Moment.js` core contributors have created their own typescript definition files. These definition files are bundled with the moment npm package. Lets look at the moment definition file

```tsx
declare namespace moment {
  //..
  interface Moment extends Object {
    format(format?: string): string;

    startOf(unitOfTime: unitOfTime.StartOf): Moment;
    endOf(unitOfTime: unitOfTime.StartOf): Moment;
    //..
  }
  //..
}
```

There are three things that have been done here, in order for this declaration file to take hold


1. We created a global namespace called `moment`. Whenever Typescript imports the Javascript `moment` library, it immediately taps into the types for `Moment`, contained within the global moment namespace.

2. We create a type annotation for all of our methods. Here we are showing one of the more commonly used one’s, `format`(along with `startof` and `endOf`). Wherein the library specifies that it can optionally take in string parameter, and returns a string.

3. The actual file has the suffix `.d.ts`. When a file has a suffix of `.d.ts`, the Typescript compiler will not immediately know of it’s existence. Instead you will have to use a reference path similar to:

``` ///<reference path=”path/to/file.d.ts” /> ```

The current practice is to place all reference paths in an `package.json` with `types/typings`

```json
{
  "name": "moment",
  ...
  "typings": "./moment.d.ts", 
  ...
}
```

### Create declaration file for a Javascript 

There are multiple ways to generate the declaration file for a javascript code one is using `JSDoc`, `npm-dts`, `Microsoft/dts-gen`, `dtsmake`,  and another simple way is paste the JavaScript into a new TypeScript file, fix any trivial errors you may get and compile it using the definition flag, it may be able to get you a file that would at least be a starting point.

```
tsc --declaration js.ts
```

I found an amazing article on typescript declaration by [Stevefen Ton](https://www.stevefenton.co.uk/2013/01/complex-typescript-definitions-made-easy/)

### 🔸 How to declare a module in TypeScript?

### 🔸 What is the difference between "interface vs type" statements?


