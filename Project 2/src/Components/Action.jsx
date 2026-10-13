import { useEffect } from 'react'
import ItemSelector from './ItemSelector'

import { updateInventory } from '../gameLogic';
import './components.css'

function Action( { action , activeAction , onActivation , setInventory , selectedItem , onItemSelect } )
{
  const isActive = activeAction === action.source;

  useEffect(() =>
  {
    if( !isActive)
      return;

    const timer = setInterval(() => 
    {
      setInventory(currentInventory => updateInventory(action.source, currentInventory, selectedItem))
    } , action.tick);
    
    return () => clearInterval(timer);

  } , [isActive, action.source, action.tick, setInventory, selectedItem]);

  return (
    <div>
        <h3>{action.source}</h3>

        { 
          action.requiresAny && (
          <ItemSelector 
          requirements = {action.requiresAny}
          selectedItem = {selectedItem}
          onItemSelect = {onItemSelect} />)
        }

        <button onClick = {() => onActivation(action.source)}>{isActive ? "Stop Generating" : "Start Generating"}</button>
    </div>
  );
}

export default Action;
