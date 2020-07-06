---
id: hooks_ctx
title: useContext a context hook 🧵
sidebar_label: useContext
---

:::note Questions 🤔
1. What is the context? Why it is useful?
2. How do you declare context in-class component and how its different using hooks?
3. How do you optimize re-rendering when one value of context changes which is unnecessary 
:::

`useContext()` Accepts a context object (the value returned from `React.createContext`) and returns the current context value for that context. The current context value is determined by the value prop of the nearest `<MyContext.Provider>` above the calling component in the tree.

```jsx
const value = useContext(MyContext);
```

When the nearest `<MyContext.Provider>` above the component updates, this Hook will trigger a re-render with the latest context value passed to that MyContext provider. Even if an ancestor uses `React.memo` or `shouldComponentUpdate`, a re-render will still happen to start at the component itself using useContext.

A component calling `useContext` will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using [memoization](https://github.com/facebook/react/issues/15156#issuecomment-474590693).


```jsx
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

:::info Remember
If you’re familiar with the context API before Hooks, `useContext(MyContext)` is equivalent to static `contextType = MyContext` in a class, or to `<MyContext.Consumer>`.

`useContext(MyContext)` only lets you read the context and subscribe to its changes. You still need a `<MyContext.Provider>` above in the tree to provide the value for this context.
:::
