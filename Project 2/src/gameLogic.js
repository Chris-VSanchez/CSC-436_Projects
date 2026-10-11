/* Game Actions and Items*/
export const actionList = 
[
  { source: "Normal Tree" , action: "Cut" , producesItem: 1 , tick: 900 },
  { source: "Oak Tree" , action: "Cut" , producesItem: 2 , tick: 1200 },
  { source: "Willow Tree" , action: "Cut" , producesItem: 3 , tick: 1500 },
  { source: "Firemaking" , action: "Burn" , producesItem: 4 , tick: 2000 , requires: { itemId: 1 , quantity: 2 } }, 
  { source: "Firemaking2" , action: "Burn" , producesItem: 4 , tick: 2000 , requires: { itemId: 2 , quantity: 2 } }, 
];

export const itemList = 
[
  { id: 1, itemName: "Normal Logs" },
  { id: 2, itemName: "Oak Logs" },
  { id: 3, itemName: "Willow Logs" },
  { id: 4, itemName: "Ash" },
];


/* Helper Functions */
export function meetsRequirements(action, inventory)
{
  if( !action.requires)
    return true;

  const requiredItem = inventory.find(item => item.id === action.requires.itemId);

  return (!!requiredItem && requiredItem.count) >= action.requires.quantity;
}

export function updateInventory(source, currentInventory)
{
  const action = actionList.find(action => action.source === source);

  if( !action || !meetsRequirements(action, currentInventory))
    return currentInventory;

  const producedItem = itemList.find(item => item.id === action.producesItem);

  if( !producedItem)
    return currentInventory;

  let updatedInventory = currentInventory;

  if( action.requires)
  {
    updatedInventory = currentInventory.map(item =>
      item.id === action.requires.itemId ? {...item, count: item.count - action.requires.quantity} : item)
    .filter(item => item.count > 0);
  }

  const itemExists = updatedInventory.some(item => item.id === producedItem.id);

  if( itemExists)
  {
    return updatedInventory.map(item => 
      item.id === producedItem.id ? {...item, count: item.count + 1} : item);
  }

  return [...updatedInventory, {...producedItem , count: 1}];
}