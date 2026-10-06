import { useState, useEffect } from 'react'
import './components.css'

function Counter( { time , id, activeCounter , onActivation } ) 
{
  const [count, setCount] = useState(0);
  const isCounting = activeCounter === id;

  useEffect(() =>
  {
    if( !isCounting)
      return;

    const timer = setInterval(() => setCount(c => c + 1) , time);
    return () => clearInterval(timer);
  } , [isCounting, time]);

  return (
    <div>

        <p>Count: {count}</p>
        <button onClick = {() => onActivation(id)}>{isCounting ? "Stop Counting" : "Start Counting"}</button>

    </div>
  );
}

export default Counter;
