import { useEffect } from 'react'
import './components.css'

function Action( { action, activeAction, onActivation, generateItem } ) 
{
  const isActive = activeAction === action.id;

  useEffect(() =>
  {
    if( !isActive)
      return;

    const timer = setInterval(() => generateItem(action.id) , action.tick);
    return () => clearInterval(timer);
  } , [isActive, action.id, action.tick, generateItem]);

  return (
    <div>
        <h3>{action.source}</h3>
        <button onClick = {() => onActivation(action.id)}>{isActive ? "Stop Generating" : "Start Generating"}</button>
    </div>
  );
}

export default Action;
