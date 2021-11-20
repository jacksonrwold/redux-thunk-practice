import './App.css';

import { useSelector, useDispatch } from "react-redux"

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <header className="App-header">
        <div>Counter: {counter}</div>
        <button onClick={() => dispatch({type: "INCREMENT"})}>increment</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>decrement</button>
      </header>
    </div>
  );
}

export default App;
