function Bank( { inventory } )
{
    return(
        <ul>
            { inventory.map(item => <li key = {item.id}>{item.itemName}: {item.count}</li> )}
        </ul>
    )   
}

export default Bank;