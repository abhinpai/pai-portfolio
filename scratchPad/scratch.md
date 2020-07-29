

### 🔸 Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`.
```js
function example() {
  console.log(this);
}
const boundExample = bind(example, { a: true });
boundExample.call({ b: true }); // logs { a: true }
```

### 🔸 What are the differences between ES6 class and ES5 function constructors?
### 🔸 Explain the difference between a static method and an instance method.
### 🔸 What tools and techniques do you use debugging JavaScript code?
