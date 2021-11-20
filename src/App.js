import './App.css';
import { useSelector, useDispatch } from "react-redux"

import { thunkFunction } from "./reducers/rootReducer"

function App() {
  const counter = useSelector((state) => state.counter)
  const foo = useSelector((state) => state.foo)
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <header className="App-header">
        <div>Counter: {counter}</div>
        <button onClick={() => dispatch({type: "INCREMENT"})}>increment</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>decrement</button>
      
        <div className="foo-thing">
          <div>Foo: { foo ? "true" : "false"}</div>
          <button onClick={() => dispatch(thunkFunction())}>change foo</button>
        </div>
      </header>
    </div>
  );
}

export default App;
