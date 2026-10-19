import { useState } from "react";
import Item from './Item'

import './components.css'

function Inventory( { inventory } )
{
  const [query, setQuery] = useState("");

  const filteredInventory = inventory.filter(item => 
    item.itemName.toLowerCase().trim().includes(query.toLowerCase().trim()));

  return(
    <section>
      
      <input className = {query.trim() === "" || filteredInventory.length ? "search-bar" : "search-error"}
      type = "text" value = {query} onChange = {e => setQuery(e.target.value)} placeholder = "Search Inventory"></input>
      
      <button className= "btn-clear" onClick = {e => setQuery("")}>X</button>
      
      <section className = "inventory">
        { 
          filteredInventory.map(item => <Item 
          key = {item.id}  
          itemId = {item.id} quantity = {item.count} />)
        }
      </section>

    </section>
  )   
}

export default Inventory;