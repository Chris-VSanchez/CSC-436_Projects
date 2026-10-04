import { useState, useEffect } from 'react'
import './App.css'

function App() 
{
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(true);

  useEffect(() =>
  {
    if( !counting)
      return;

    const timer = setInterval(() => setCount(c => c + 1) , 1000);
    return () => clearInterval(timer);
  } , [counting]);

  function toggleButton()
  {
    setCounting(counting => !counting);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick = {toggleButton}>{counting ? "Currently Counting" : "Count"}</button>
    </>
  );
}

export default App;
