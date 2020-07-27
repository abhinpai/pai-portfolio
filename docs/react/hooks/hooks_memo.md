---
id: hooks_memo
title: React.memo or useMemo Memorization hook 💾
sidebar_label: useMemo
---

Memoization is an optimization technique used to primarily speed up programs by storing the results of expensive function calls and returning the cached results when the same inputs occur again.

This can be achieve in react using the `React.memo` or `useMemo` react hook.

#### `useMemo` takes the react functional component and render it initially and on subsequent render the hook internally take care of  `shouldComponentUpdate` method which check the current states or props and decide whether to render the component or not 

`useMemo` or `React.memo` is the one of the major advantage to optimize the application performance by reducing the redundant rendering 

## What is the cost of `React.memo `or `useMemo`?

A memoized component compares old with news props to decide, if to re-render each render cycle.
A plain component does not care and just renders, after props/state change in a parent.

## When NOT use React `React.memo `or `useMemo`?

There are no hard rules. Things, that affect `React.memo `or `useMemo` negatively:

* component often re-renders with props, that have changed anyway
* component is cheap to re-render
* comparison function is expensive to perform

### There are few consideration while implementing the `useMemo` hook
* If we pass a **function** to a component as a props **useMemo** will think its a new one and update the component always. Instead we can use `useCallback` for the function and pass the reference of the callback function instead
* If we pass a **object** as a props to a component then like function **useMemo** will think it as new one and update the component always 

Here is the live example of `React.memo` and `useMemo` hooks please refer the [codesandbox](https://codesandbox.io/s/react-memo-3mdfw?file=/src/App.js:0-661)