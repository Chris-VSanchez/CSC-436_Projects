import { useState } from "react";
import Item from './Item'

function Inventory( { inventory } )
{
  const [query, setQuery] = useState("");

  const filteredInventory = inventory.filter(item => 
    item.itemName.toLowerCase().trim().includes(query.toLowerCase().trim()));

  return(
    <>
      <input type = "text" value = {query} onChange = {e => setQuery(e.target.value)} placeholder = "Search Inventory"></input>
      
      { 
        filteredInventory.map(item => <Item 
        key = {item.id}  
        itemId = {item.id} quantity = {item.count} />)
      }
    </>
  )   
}

export default Inventory;