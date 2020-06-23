---
id: module3_object
title: Hello i am an Object 👋
sidebar_label: "Module 3: Object"
description: Object description
keywords:
  - Object
  - null
  - '?.'
---
import useBaseUrl from '@docusaurus/useBaseUrl';

### ⭐️ `null` Propagation Operator / Optional Chaining `?.`

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


:::tip Crunchy Fact 
Optional chaining also works with also works with functions and square brackets.

`obj?.[prop]` – returns `obj[prop]` if obj exists, otherwise undefined <br/>
`obj?.method()` – calls `obj.method()` if obj exists, otherwise returns undefined 
:::

