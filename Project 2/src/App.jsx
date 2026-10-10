import { useState , useEffect } from "react";

import Action from "./Components/Action";
import Inventory from "./Components/Inventory";

const actionList = 
[
  { id: 1 , source: "Normal Tree" , action: "Cut" , produces: "Normal Logs" , tick: 900 },
  { id: 2 , source: "Oak Tree" , action: "Cut" , produces: "Oak Logs" , tick: 1200 },
  { id: 3 , source: "Willow Tree" , action: "Cut" , produces: "Willow Logs" , tick: 1500 },
  { id: 4 , source: "Firemaking" , action: "Burn" , produces: "Ash" , tick: 2000 , requires: { itemId: 1 , quantity: 2 } }, 
]

function App()
{
  const [inventory, setInventory] = useState([]);
  const [activeAction, setActiveAction] = useState(0);

  function meetsRequirements(action, inventory)
  {
    if( !action.requires)
      return true;

    const requiredItem = inventory.find(item => item.id === action.requires.itemId);

    return (requiredItem && requiredItem.count) >= action.requires.quantity;
  }

  useEffect(() => 
  {
    if( activeAction === 0) 
      return;

    const action = actionList.find(action => action.id === activeAction);

    if( !action || !meetsRequirements(action, inventory))
      setActiveAction(0);
  }, [inventory, activeAction]);

  function toggleCounter(id)
  {
    if( activeAction === id) 
    {
      setActiveAction(0);
      return;
    }

    const action = actionList.find(action => action.id === id);

    if( !action || !meetsRequirements(action, inventory))
      return;

    setActiveAction(id);
  }

  function generateItem(id)
  {
    const action = actionList.find(action => action.id === id);

    if( !action)
      return;

    if( !meetsRequirements(action, inventory))
    {
      setActiveAction(currentAction => currentAction === id ? 0 : currentAction);
        
      return;
    }

    setInventory(currentInventory =>
    {
      let updatedInventory = currentInventory;
      
      if( action.requires)
      {
        updatedInventory = currentInventory.map(item => 
          item.id === action.requires.itemId ? {...item, count: item.count - action.requires.quantity} : item)
        .filter(item => item.count > 0);
      }

      const itemExists = updatedInventory.find(item => item.id === id);

      if( itemExists)
      {
        return updatedInventory.map(item => 
          item.id === id ? {...item, count: item.count + 1} : item);
      }

      return [...updatedInventory, {id: action.id , itemName: action.produces , count: 1}];
    });
  }

  return (
    <>

      <Inventory inventory = {inventory} />
      
      { 
        actionList.map(action => <Action 
        key = {action.id}  action = {action} 
        activeAction = {activeAction} onActivation = {toggleCounter} 
        generateItem = {generateItem} />)
      }

    </>
  );
}

export default App;