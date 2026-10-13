import { itemList } from "../gameLogic"

function ItemSelector( { requirements , selectedItem , onItemSelect } )
{
  return (
    <select value = {selectedItem ?? ""} onChange = {e => onItemSelect(Number(e.target.value))}>

      <option value = "" disabled> Choose an item</option>
    
    {
      requirements.map(requirement => <option key = {requirement.itemId} value = {requirement.itemId}>
        {itemList.find(item => item.id === requirement.itemId)?.itemName}
      </option> )
    }
    
    </select>
  );
}

export default ItemSelector