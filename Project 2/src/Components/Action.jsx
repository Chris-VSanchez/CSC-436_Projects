import { useEffect } from 'react'

import { updateInventory } from '../gameLogic';
import './components.css'

function Action( { action, activeAction, onActivation, setInventory } )
{
  const isActive = activeAction === action.source;

  useEffect(() =>
  {
    if( !isActive)
      return;

    const timer = setInterval(() => setInventory(currentInventory => updateInventory(action.source, currentInventory)) , action.tick);
    
    return () => clearInterval(timer);

  } , [isActive, action.source, action.tick, setInventory]);

  return (
    <div>
        <h3>{action.source}</h3>
        <button onClick = {() => onActivation(action.source)}>{isActive ? "Stop Generating" : "Start Generating"}</button>
    </div>
  );
}

export default Action;
