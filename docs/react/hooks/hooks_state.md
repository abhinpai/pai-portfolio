---
id: hooks_state
title: useState a state hook 📌
sidebar_label: useState
---

:::note Questions 🤔
1. **What do we pass to useState as an argument?** <br/>
  According to the React Doc useState allow only argument to set the initial state. Unlike classes, the state doesn’t have to be an object.

2. **What does useState return?** <br/>
  It returns a pair of values, The current state and a function that updates its current state
:::

`useState()` is a replacement for the traditional way to declare a state inside the class constructor. This hook method lets you add React state to function components.

Returns a stateful value, and a function to update it.

```jsx {2,11}
export default function App() {
  const [name, setName] = useState('Anonymous');

  useEffect(() => {
    document.title = name;
  });

  return (
    <div>
      <h2>{name}</h2>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
    </div>
  );
}
```
alternate using class 

```jsx
class App extends Component {
  constructor(props) {
    super(props);
    // highlight-start
    this.state = {
      name: 'Anonymous',
    };
    // highlight-end
  }

  render() {
    return (
      <div>
        <h2>{name}</h2>
        //  highlight-next-line
        <input type='text' onChange={(e) => this.setState({name: e.target.value})} />
      </div>
    );
  }
}
```


In the above example, we declare a new state variable, which I called "name". 

`useState` method return array, In that first subscript value, states (name) and the second value is a method to mutate that state (setName) and we used Javascript `Array Destructing` 

```jsx
let stateResult =  useState('Anonymous');
const name = stateResult[0];
const setName = stateResult[1];
```

In React state variables are preserved. They do not vanish like they normally would when a function exits.

## Lazy initial state
The initialState argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render

```jsx
const [state, setState] = useState(() => {
  const initialState = someComputation(props);
  return initialState;
});

```

:::info Remember 
React guarantees that setState function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list.
:::