import { getItem } from '../gameLogic'

import './components.css'

function Item( { itemId , quantity } )
{
  const item = getItem(itemId);

  return(
    <div className = 'item'>
    
      <img className = "item-image" src = {item.image} alt = {`Image of Item: ${item.itemName}`} />
      <p>{quantity}</p>
      <p className = 'item-name'>{item.itemName}</p>
    
    </div>
  )
}

export default Item;