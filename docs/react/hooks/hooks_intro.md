---
id: hooks_intro
title: React Hooks Introduction 🎣
sidebar_label: Introduction
---

:::note Questions 🤔
1. **Why hooks when there is a class** <br/>
    Hooks are simple, robust and flexible. We can trim no of lines, can call and maintain lifecycle method execution using `useEffect`, Provide a flexibility of sharing logic that wasn’t possible in React components before.
2. **What problems hooks can solve** <br/>
    🔸 `Wrapper Hell (Reusable Logic)`, As application grows maintainability will be very difficult we will be endup by adding to many element to the DOM tree which may led to performance <br/>
    🔸 `Huge Components` trouble of having multiple life cycle methods and complex components are hard to understand
    ```jsx
        componentDidMount() {
            this.subscribeToStatus(id);
        }

        componentDidUpdate(prevProps) {
            prevProps != props ? true : false;
        }

        componentWillUnmount() {
            this.unsubscribeToStatus(id);
        }
    ```
    🔸 `Confusing Classes`, Classes confuse both people and machines
:::

## Introduction

Hooks are a new player in React 16.8. They let you to use stateful logic between the components. These are the special function which hooks into the the context and can let you to use it later

Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)

Hooks let us split the code based on what it is doing rather than a lifecycle method name. React will apply every effect used by the component, in the order they were specified.

## List of built-in React Hooks

React provided many built-in hooks those are 

* 📌 `useState()`
* ⚡️ `useEffect()` 
* 🧵 `useContext()` 
* 💾 `useMemo()` 
* ✂️ `useReducer()`

**I recommend to watch [Dan Abramov](https://twitter.com/dan_abramov) and [Ryan Florence](https://twitter.com/ryanflorence) video on React Hooks it really awesome**

<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/dpw9EHDh2bM" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
