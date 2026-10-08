import { useEffect, useState } from "react";
import Item from "./Components/Item";

const itemList = 
[
  { id: 1 , itemName: "First Tree" , tick: 750 , count: 0 },
  { id: 2 , itemName: "Second Tree" , tick: 1250 , count: 0 },
  { id: 3 , itemName: "Third Tree" , tick: 2000 , count: 0 }
]

function App()
{
  const [items, setItems] = useState(itemList);
  const [activeCounter, setActiveCounter] = useState(0);

  function toggleCounter(id)
  {
    activeCounter === id ? setActiveCounter(0) : setActiveCounter(id)
  }

  function generateItem(id)
  {
    setItems(currentItems => currentItems.map(item => 
      item.id === id ? { ...item, count: item.count + 1 } : item ));
  }
  
  return (
    <>
      { items.map(item => <Item 
        key = {item.id}  item = {item} 
        activeCounter = {activeCounter} onActivation = {toggleCounter} 
        generateItem = {generateItem} />)
      }
    </>
  );
}

export default App;