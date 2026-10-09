import { useEffect } from 'react'
import './components.css'

function Action( { action, activeAction, onActivation, generateItem } ) 
{
  const isCounting = activeAction === action.id;

  useEffect(() =>
  {
    if( !isCounting)
      return;

    const timer = setInterval(() => generateItem(action.id) , action.tick);
    return () => clearInterval(timer);
  } , [isCounting, action.id, action.tick, generateItem]);

  return (
    <div>
        <h3>{action.source}</h3>
        <button onClick = {() => onActivation(action.id)}>{isCounting ? "Stop Generating" : "Start Generating"}</button>
    </div>
  );
}

export default Action;
