import { useState, useEffect } from "react";
import Counter from "./Components/Counter";

const counterList =
[
  { id: 1 , tick: 1000 }, 
  { id: 2 , tick: 2000 }, 
  { id: 3 , tick: 3000 } 
];

function App()
{
  const [activeCounter, setActiveCounter] = useState(0);

  function toggleCounter(id)
  {
    activeCounter === id ? setActiveCounter(0) : setActiveCounter(id)
  }

  return (
    <>
      { counterList.map(counter => <Counter 
        key = {counter.id} id = {counter.id} 
        activeCounter = {activeCounter} time = {counter.tick} 
        onActivation = {toggleCounter} />)
      }
    </>
  );
}

export default App;