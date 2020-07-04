---
id: react_hooks
title: React Hooks
sidebar_label: Hooks
---

:::note Questions 🤔
1. Why hooks when there is a class
2. What problems hooks can solve
    * **Wrapper Hell (Reusable Logic)**, As application grows maintainability will be very difficult we will be endup by adding to many element to the DOM tree which may led to performance 
    * **Huge Components** trouble of having multiple life cycle methods and complex components are hard to understand
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
    * **Confusing Classes**, Classes confuse both people and machines
:::

## Introduction

Hooks are a new player in React 16.8. They let you to use stateful logic between the components. These are the special function which hooks into the the context and can let you to use it later

Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)


## List of React Hooks

React provided many built-in hooks those are 

* 📌 useState() | State Hook 
* ⚡️ useEffect() | Effect Hook
*

## Rules of Hooks

* Hooks can not be used inside any condition it has to the at the top level basically hooks are unconditionally awesome 😎
* All the hooks methods are determined by `use` as prefix to the method name
* Hooks can be called only inside the functional component. Do not call hooks from regular javascript function
