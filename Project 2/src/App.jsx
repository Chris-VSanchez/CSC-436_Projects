import { useState } from "react";
import Item from "./Components/Item";
import Bank from "./Components/Bank";

const itemList = 
[
  { id: 1 , itemName: "First Tree" , tick: 750 },
  { id: 2 , itemName: "Second Tree" , tick: 1250 },
  { id: 3 , itemName: "Third Tree" , tick: 2000 }
]

function App()
{
  const [inventory, setInventory] = useState([]);
  const [activeCounter, setActiveCounter] = useState(0);

  function toggleCounter(id)
  {
    activeCounter === id ? setActiveCounter(0) : setActiveCounter(id)
  }

  function generateItem(id)
  {
    const item = itemList.find(item => item.id === id);

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

      return [...currentInventory, {id: item.id , itemName: item.itemName , count: 1}];
    });
  }

  return (
    <>
      <Bank inventory = {inventory} />
      { itemList.map(item => <Item 
        key = {item.id}  item = {item} 
        activeCounter = {activeCounter} onActivation = {toggleCounter} 
        generateItem = {generateItem} />)
      }
    </>
  );
}

export default App;