import { useEffect } from 'react'
import './components.css'

function Item( { item, activeCounter, onActivation, generateItem } ) 
{
  const isCounting = activeCounter === item.id;

  useEffect(() =>
  {
    if( !isCounting)
      return;

    const timer = setInterval(() => generateItem(item.id) , item.tick);
    return () => clearInterval(timer);
  } , [isCounting, item.id, item.tick, generateItem]);

  return (
    <div>
        <h3>{item.itemName}</h3>
        <button onClick = {() => onActivation(item.id)}>{isCounting ? "Stop Generating" : "Start Generating"}</button>
    </div>
  );
}

export default Item;
