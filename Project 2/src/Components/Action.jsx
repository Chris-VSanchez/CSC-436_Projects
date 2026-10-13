import { useEffect } from 'react'
import ItemSelector from './ItemSelector'

import { updateInventory } from '../gameLogic';
import './components.css'

function Action( { action , activeAction , onActivation , setInventory , selectedItems , onItemSelect } )
{
  const isActive = activeAction === action.source;
  
  const selectedItem = selectedItems[action.source] ?? null;

  function handleItemSelect(itemId) 
  {
    onItemSelect(current => ({...current, [action.source]: itemId}));
  }

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
          onItemSelect = {handleItemSelect} />)
        }

        <button onClick = {() => onActivation(action.source)}>{isActive ? "Stop Generating" : "Start Generating"}</button>

    </div>
  );
}

export default Action;
