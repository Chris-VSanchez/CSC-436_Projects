import { useState } from "react";

import Action from "./Components/Action";
import Inventory from "./Components/Inventory";

const actionList = 
[
  { id: 1 , source: "Normal Tree" , produces: "Normal Logs" , tick: 900 },
  { id: 2 , source: "Oak Tree" , produces: "Oak Logs" , tick: 1200 },
  { id: 3 , source: "Willow Tree" , produces: "Willow Logs" , tick: 1500 }
]

function App()
{
  const [inventory, setInventory] = useState([]);
  const [activeAction, setActiveAction] = useState(0);

  function toggleCounter(id)
  {
    activeAction === id ? setActiveAction(0) : setActiveAction(id)
  }

  function generateItem(id)
  {
    const item = actionList.find(item => item.id === id);

    if( !item)
      return;

    setInventory(currentInventory =>
    {
      const itemExists = currentInventory.find(inventoryItem => inventoryItem.id === id);

      if( itemExists)
      {
        return currentInventory.map(inventoryItem => 
          inventoryItem.id === id ? {...inventoryItem, count: inventoryItem.count + 1} : inventoryItem);
      }

      return [...currentInventory, {id: item.id , itemName: item.produces , count: 1}];
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