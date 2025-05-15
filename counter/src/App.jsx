import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  // let counter = 0

  const addValue = () => {
    // counter += 1
    setCounter(counter + 1);
    setMessage("");
  }

  const removeValue = () => {
    // counter -= 1
    if (counter > 0) {
      setCounter(counter - 1);
      setMessage("");
    } else {
      setCounter(0);
      setMessage("Can't go below 0");
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>
      {message && <p style={{ color: 'red' }}>{message}</p>}

      <button
      onClick={addValue}
      >Add value</button>
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
