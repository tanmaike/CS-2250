import './App.css'
import { useState } from "react"
import { Box } from "./components/Box"

function App() {
  const myName = 'Michael';
  const [counter, setCounter] = useState(0);

  const increment = (event) => {
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <Box text="Joe" background="red" borderColor="yellow" />
      <h1>I am {myName}</h1>
      <p>The current count is {counter}</p>
      <button onClick={increment}>Click me to increment counter</button>
      <Box text="Mama" background="green" borderColor="blue" />
    </div>
  );
}

export default App;
