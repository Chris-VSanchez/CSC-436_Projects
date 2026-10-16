import { getItem } from '../gameLogic'

function Item( { itemId , quantity } )
{
  return(
    <div>
      <p>{getItem(itemId).itemName}</p>
      <p>{quantity}</p>
    </div>
  )
}

export default Item;