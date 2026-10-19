import { useEffect } from 'react'

import Item from './Item'
import ItemSelector from './ItemSelector'

import { getRecipe , updateInventory } from '../gameLogic';
import './components.css'

function Action( { action , activeAction , onActivation , setInventory , selectedItems , onItemSelect } )
{
  const isActive = activeAction === action.source;
  
  const selectedItem = selectedItems[action.source] ?? null;
  const userChoice = action.requiresAny && selectedItem ? getRecipe(action.requiresAny, selectedItem) : null;

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
    <div className = {`action-card ${action.action.toLowerCase()}`}>
        
      <div className = 'action-details'>
      
        <p>{action.action}</p>
        <h3>{action.source}</h3>
        <p>{action.tick / 1000} seconds</p>
      
      </div>

      {
        action.requires && (
        <>
            
          <p>Requires:</p>
              
          <Item 
          key = {action.requires.itemId}
          itemId = {action.requires.itemId} quantity = {action.requires.quantity} />
         
        </>)
      }
        
      {
        !action.requiresAny && (
          <>
            <p>Produces:</p>

            <Item
            key = {action.produces.itemId}
            itemId = {action.produces.itemId} quantity = {action.produces.quantity} />
          </>)
      }

      { 
        action.requiresAny && (
        <>
          <ItemSelector 
          requirements = {action.requiresAny}
          selectedItem = {selectedItem} onItemSelect = {handleItemSelect} />

          { 
            selectedItem && (
            <>

              <p>Requires:</p>
                
              <Item 
              key = {selectedItem}
              itemId = {selectedItem} quantity = {userChoice.quantity} />
              
            </>)
          }
            
          { 
            selectedItem && (
            <>
              
              <p>Produces:</p>

              <Item 
              key = {userChoice.produces.itemId}
              itemId = {userChoice.produces.itemId} quantity = {userChoice.produces.quantity} />
              
            </>)
          }

        </>)
      }

        <button className = {isActive ? "btn-stop" : "btn-start"}
        onClick = {() => onActivation(action.source)}>{isActive ? "Stop Generating" : "Start Generating"}</button>

    </div>
  );
}

export default Action;