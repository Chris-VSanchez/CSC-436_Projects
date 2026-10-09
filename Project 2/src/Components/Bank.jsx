import { useState } from "react";

function Bank( { inventory } )
{
    const [query, setQuery] = useState("");

    const filteredInventory = inventory.filter(item => 
        item.itemName.toLowerCase().includes(query.toLowerCase()));

    return(
    <>
        <input type = "text" value = {query} onChange = {e => setQuery(e.target.value)} placeholder = "Search Inventory"></input>
        <ul>
            { filteredInventory.map(item => <li key = {item.id}>{item.itemName}: {item.count}</li> )}
        </ul>
    </>
    )   
}

export default Bank;