---
id: hooks_effect
title: useEffect an effect hook ⚡️
sidebar_label: useEffect
---

:::note Questions 🤔 
1. **Why is useEffect called inside a component?** <br/>
  Placing `useEffect` inside the component lets us access the state variable or any props right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

2. **Does useEffect run after every render?** <br/>
  Yes! By default, it runs both after the first render and after every update. 

3. **Why did we return a function from our effect?** <br/>
  This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!

4. **When exactly does React clean up an effect?** <br/>
  React performs the cleanup when the component unmounts. However, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.
:::


React's `useEffect` hook combines `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` lifecycle methods. This is very useful, which reduces the amount of code, simplifies the code, and allows for multiple `useEffect` hooks to be called in a single component.

Syntax of `useEffect` is

```jsx
  useEffect(() => {
    effect // componentDidMount
    return () => { // componentWillUnmount
      cleanup
    }
  }, [input]) // ComponentDifUpdate
```

Where this method helps to perform a certain action when the component mounts and if the component wants to re-render whenever the input (state/props) changes, in that case, we need to pass that particular input to the use effect as an array. useEffect do have a return statement which will help to take care of some sort of operation when the component will leave the window. 

## componentDidMount equivalent

In order to have this hook run only once (when a component is mounted), we need to set an empty array as a hook dependency.

```jsx
// Using Hooks
useEffect(() => {
    // ComponentDidMount code
}, []);

// Using Lifecycle Method
componentDidMount(){
    // Some business logic
}
```

## componentDidUpdate equivalent

In order to have this hook run when the component is updated (this includes mounting), we need to set at least one variable as hook's dependency. 

```jsx
// Using Hooks
useEffect(() => {
  // ComponentDidMount code 
}, [input]);

// Using Lifecycle method
componentDidUpdate(prevProps) {
    return prevProps !== props ? true : false;
}
```


## componentWillUnmount equivalent

In order to have this hook run when the component is unmounted, we need to return a function from the hook. If we want a cleanup function to run only when the component has unmounted, we need to set an empty array. If we set one or more variables in the dependency array, cleanup will run at every re-render.

```jsx
useEffect(() => {
  return () => {
    // componentWillUnmount code
  }
}, []);
```

## Async Operation using `useEffect`

```jsx {4-6}
export default function Example() { 
    const [data, setData] = useState(false);

    useEffect(async () => {
      let response = await fetch('api/data') //Direct call
      response = await res.json()
      setData(response)
    }, []);

  return <div>{data}</div>;
}
```

> "React Hook Warnings for async function in useEffect: useEffect function must return a cleanup function or nothing"

To solve this issue you need to call a Synchronous method. Even if this new one is Async.

```jsx {5-10}
export default function Example() { 
    const [data, setData] = useState(false);

    useEffect(() => {
      const runAsync = async () => {
        let response = await fetch('api/data')
        response = await res.json()
        setData(response)
      };
      runAsync();
    }, []);

  return <div>{data}</div>;
}
```

## Clean up using `useEffect`

In the above example, we tried async using react in case if we want to do some sort of cleanup like close connection, reset state, etc we need to add those logics into the anonymous function and should return 

```jsx {12}
export default function Example() { 
    const [data, setData] = useState(false);

    useEffect(() => {
      const runAsync = async () => {
        let response = await fetch('api/data')
        response = await res.json()
        setData(response)
      };
      runAsync();

      return () => { cleanup() }
    }, []);

  return <div>{data}</div>;
}
```

or Cancel fetch with `AbortController` from fetch/es6

```jsx {17, 12}
export default function Example() { 
    const [data, setData] = useState(false);
    const abortController = new AbortController();

    useEffect(() => {
      const runAsync = async () => {
           // highlight-start
        try {
            let response = await fetch('api/data')
            response = await res.json()
            setData(response)
        } catch(ex) {
           abortController.signal.aborted ?  canceled : throw ex;
        }
        // highlight-end
      };
      runAsync();
        // highlight-next-line
      return () => abortController.abort();
    }, []);

  return <div>{data}</div>;
}
```

:::info Remember
* Unlike `componentDidMount` or `componentDidUpdate`, effects scheduled with `useEffect` don’t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don’t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate `useLayoutEffect` Hook with an API identical to useEffect.
* We don’t have to return a named function from the effect
:::

For more details refer [React Official Doc](https://reactjs.org/docs/hooks-effect.html)