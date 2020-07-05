---
id: hooks_reducer
title: useReducer a state Hook ✂️
sidebar_label: useReducer
---

:::note Question 🤔
1. **`useReducer` over `useState`**
    * It is always better to use this method when the state depends on the previous one. It will give you a more predictable state transition
    * When the state consists of more than primitive values, like nested object or arrays
    * Reducers are pure functions, and this means they have no side effects and must return the same outcome given the same arguments. It is easier to test them because they do not depend on React.
:::

An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method


`useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. `useReducer` also lets you `optimize performance` for components that trigger deep updates because you can pass dispatch down instead of callbacks.

```jsx
const userStatus = {status: 'offline'};

function reducer(state, action) {
  switch (action.type) {
    case 'online':
      return {status: action.type};
    case 'busy':
      return {status: action.type};
    case 'away':
      return {status: action.type};
    default:
      return {status: 'offline'};
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, userStatus);
  return (
    <>
      User Status: {state.status}
      <button onClick={() => dispatch({type: 'online'})}>-</button>
      <button onClick={() => dispatch({type: 'busy'})}>+</button>
    </>
  );
}
```

## Specifying the initial state

There are two different ways to initialize useReducer state. You may choose either one depending on the use case. The simplest way is to pass the initial state as a second argument:

```jsx
  const [state, dispatch] = useReducer(
    reducer,
    {state: userStatus}
  );
```