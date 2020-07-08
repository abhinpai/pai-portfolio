---
id: module11_module
title: Module
sidebar_label: "Module 11: Module"
---

import CustomText from '../../../src/components/customText/customText.jsx';

:::note Questions 🤔
1. What Happens When a Module Is Imported Twice?
2. What is the benefit of building tools?
3. Is it possible to export const function?
4. What is the purpose of modules?
5. What are the best practices of modules?
:::

JS modules (also known as “ES modules” or “ECMAScript modules”) are a major new feature, or rather a collection of new features. As our application grows bigger, we want to split it into multiple files, so-called `modules`. A module may contain a class or a library of functions for a specific purpose.

Within a module, you can use the export keyword to export just about anything. You can export a const, a function, or any other variable binding or declaration. Just prefix the variable statement or declaration with export.

## Core module features

A module is just a file. One script is one module. As simple as that.

🔸 `export` keyword labels variables and functions that should be accessible from outside the current module. <br/>
🔸 `import` allows the import of functionality from other modules. <br/>

```js title="message.js"
// Exporting function
export function conveyMessage(message) {
    console.log(message);
}
```

```js title="home.js"
// importing function 
import {conveyMessage} from './message.js'

conveyMessage("Hello Beautiful People");
```

The `import` directive loads the module by path `./message.js` relative to the current file, and assigns exported function `conveyMessage` to the corresponding variable.

### 🔸 Always `use strict`
Modules always `use strict`, by default

### 🔸 Module-level scope
Each module has its own top-level scope. In other words, top-level variables and functions from a module are not accessible from an outside script

In order to use we need to export from one script and import it in another.

### 🔸 A module code is evaluated only the first time when imported
If the same module is imported into multiple other places or in the same script, its code is executed `only the first time`, then exports are given to all importers.

### 🔸 HTML-style comment syntax is not supported in modules, although it works in classic scripts

```js
// Don’t use HTML-style comment syntax in JavaScript!
const x = 42; <!-- TODO: Rename x to y.
// Use a regular single-line comment instead:
const x = 42; // TODO: Rename x to y.
```

```js
// message.js
export console.log("Hello Hacker 👨🏻‍💻");
```

```js
// Importing the same module in two different files

// 1.js
import './message.js'; // Module is evaluated

// 2.js
import './message.js'; // Ignore (Shows nothing)
```

Let's see with another example

```js
// hero.js
export let hero = {}; // waiting to feed object data from outside script
```

```js
// ironman.js
import { hero } from './hero.js';
hero.name = 'Iron Man';

// infinityWar.js
import { hero } from './hero.js';
console.log(hero); // Iron Man
```

Changes made in `ironman.js` file are visible in `infinityWar.js`

So let's summarize, the module is executed only once. Exports are generated, and then they are shared between importers, so if something changes from one module will reflect in another imported module

### 🔸 import.meta
The object `import.meta` contains information about the current module.

Its content depends on the environment. In the browser, it contains the URL of the script, or a current webpage URL if inside HTML

### 🔸 In a module, `this` is undefined
The `this` within modules does not refer to the global `this`, and instead is `undefined`. (Use `globalThis` if you need access to the global this.)

```html
<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>
```

Compare it to non-module scripts, where this is a global object

### 🔸 No `bare` modules allowed

In the browser, the import must get either a `relative` or `absolute` URL. Modules without any path are called `bare modules`. Such modules are not allowed in `import`.

```js
import {hero} from `marvel.js`; // Error base module. The import module must have a path
```

> Certain environments, like Node.js or bundle tools, allow bare modules, without any path, as they have their own ways for finding modules and hooks to fine-tune them. But browsers do not support bare modules yet.


## Build tools 
In real-life, browser modules are rarely used in their `raw` form. Usually, we bundle them together with a special tool such as `Webpack` and deploy it to the production server.

One of the benefits of using bundlers – they give more control over how modules are resolved, allowing bare modules and much more, like CSS/HTML modules.

### Build tools anatomy

1. Take a `main` module, the one intended to be put in HTML `<script type="module">`
2. Analyze its dependencies: imports and then imports of imports etc.
3. Build a single file with all modules (or multiple files, that’s tunable), replacing native import calls with 4. 4. bundler functions so that it works. `Special` module types like HTML/CSS modules are also supported.
5. In the process, other transformations and optimizations may be applied
6. Unreachable code removed.
7. Unused exports removed `tree-shaking`.
8. Development-specific statements like console and debugger removed.
9. Modern, bleeding-edge JavaScript syntax may be transformed into an older one with similar functionality using Babel.
10. The resulting file is minified (spaces removed, variables replaced with shorter names, etc).
11. If we use bundle tools, then as scripts are bundled together into a single file (or few files), import/export statements inside those scripts are replaced by special bundler functions. So the resulting `bundled` script does not contain any import/export, it doesn’t require `type="module"`

## Export and Import 

Export and import directives have several syntax variants

### Export before declarations

We can label any declaration as exported by placing `export` before it, be it a variable, function or a class

```js
export let gadget = { laptop: 'MacBook' }

export const THEME_COLOR = "#0000";

export function hello() { console.log("Hello") }

export class MyClass { }
```

:::caution Remember
We should not use the `semicolon` after exporting class/function
:::

### Export apart from declarations

We can declare class/function in the first place and then we can export them separately in bulk or in single. Or, technically we could put export above functions as well.

```js
function hello() { console.log("Hello") }

class MyClass { }

export {hello, myClass};
```

### import `*` 

Usually, we use `{...}` to import a list of items. If we want to import lots of items then we could probably use `import *` or `import * as <object>` which will return all the imports in a single object

```js
// Individual Import 
import {hello, myClass} from './xyz.js';

// Import all together
import * from './xyz.js';

// Alias to the imported object 
import * as myImports  from './xyz.js';
```

### import `as`

`as` keyword can be used in the import statement to alias our import module

```js
import {hello as messageFunc, myClass as MainClass} from './xyz.js';
import * as myImports  from './xyz.js';
```

### Export `as`

Like `import as` it's similar to the export directive 

### Default export

Sometimes we may box all the functions/methods, objects, or constants into a single module to make it more clean and neat in that case `export default` is a JOHN RAY to make one thing per module.

default export is possible with functions, class, objects, enums, etc.

:::caution Remember
* There can be only one default mode in a single file. But we can have other optional exports into the single file
* If your importing a default module then it's not required to use `{}`

```js {1}
export default class Hero { ... }

import { Hero } from './Hero.js'; // Throws an error
import Hero from './Hero.js';
```
* For default export, we can always choose the name when importing but whereas in named export the name has to be same as defined
:::

### The `default` name

In some situations, the `default` keyword is used to reference the `default export`

```js
class Hero { ... }

export { Hero as default } 
```

## Dynamic Imports

So far we have seen the import and export which are called `Static` where the syntax of these static import/export in simple but strict

The `import(module)` expression loads the module and returns a promise that resolves into a module object that contains all its exports. It can be called from any place in the code.

```js {7}
let modulePath = prompt("Which module to load?");

import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error, e.g. if no such module>)

// Or we also load inside an async function

let module = await import(modulePath)
```

Dynamically importing module using `Promise.all()`

```js
Promise.all(
  ['module1', 'module2', 'module3'].map((x) => System.import(x))
).then(function ([module1, module2, module3]) {
  // my code...
});
```

:::info Note
* We can't use static imports anywhere in that. In case if we want to use the imports we can achieve that using `import(module)`
* webpack has its own version of `import()` that cleverly splits the imported module into its own chunk, separate from the main bundle.
* Although `import()` looks like a function call, it’s a special syntax that just happens to use parentheses (similar to super()).

    So we can’t copy `import` to a variable or use `call/apply` with it. It’s not a function.
:::


<CustomText styleClass="heading-1">Reference</CustomText>

* [V8 Blog](https://v8.dev/features/modules)
* [dmitripavlutin](https://dmitripavlutin.com/javascript-module-import-twice/)
