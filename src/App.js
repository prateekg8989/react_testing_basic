import './App.css';
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button className="increment" type="button" onClick={() => setCount(count+1)}>Click me</button>
    </div>
  );
}

export default App;
