/* Game Actions and Items*/
export const actionList = 
[
  { 
    source: "Normal Tree" , 
    action: "Cut" , 
    produces: { itemId: 1 , quantity: 1 } , 
    tick: 900 
  },

  { 
    source: "Oak Tree" , 
    action: "Cut" , 
    produces: { itemId: 2 , quantity: 1 } , 
    tick: 1200 
  },

  { 
    source: "Willow Tree" , 
    action: "Cut" , 
    produces: { itemId: 3 , quantity: 1 } , 
    tick: 1500 
  },

  { 
    source: "Firemaking" , 
    action: "Burn" , 
    requiresAny: [ { itemId: 1 , quantity: 2 } , { itemId: 2 , quantity: 2 } , { itemId: 3 , quantity: 2 } ] , 
    produces: { itemId: 4 , quantity: 1 } , 
    tick: 2000 
  }, 

  {
    source: "Raw Shrimp" ,
    action: "Fish" ,
    produces: { itemId: 5 , quantity: 2 } ,
    tick: 2500
  },

  {
    source: "Cooked Shrimp" ,
    action: "Cook" ,
    requires: { itemId: 5 , quantity: 1 } ,
    produces: { itemId: 6 , quantity: 1 } ,
    tick: 3000
  }
];

export const itemList = 
[
  { id: 1, itemName: "Normal Logs" },
  { id: 2, itemName: "Oak Logs" },
  { id: 3, itemName: "Willow Logs" },
  { id: 4, itemName: "Ash" },
  { id: 5, itemName: "Raw Shrimp"},
  { id: 6, itemName: "Cooked Shrimp"}
];


/* Helper Functions */
export function meetsRequirements(action, inventory, selectedItem)
{
  if( action.requires)
  {
    const requiredItem = inventory.find(item => item.id === action.requires.itemId);

    return (requiredItem?.count ?? 0) >= action.requires.quantity;
  }

  if( action.requiresAny)
  {
    const requirement = action.requiresAny.find(item => item.itemId === selectedItem);

    if( !requirement)
      return false;

    const requiredItem = inventory.find(item => item.id === requirement.itemId);

    return (requiredItem?.count ?? 0) >= requirement.quantity;
  }

  return true
}

export function updateInventory(source, currentInventory, selectedItem)
{
  const action = actionList.find(action => action.source === source);

  if( !action || !meetsRequirements(action, currentInventory, selectedItem))
    return currentInventory;

  let updatedInventory = currentInventory;

  if( action.requires)
    updatedInventory = removeItem(action.requires.itemId, action.requires.quantity, updatedInventory);

  if( action.requiresAny)
  {
    const requirement = action.requiresAny.find(item => item.itemId === selectedItem);
    
    updatedInventory = removeItem(requirement.itemId, requirement.quantity, updatedInventory);
  }

  updatedInventory = addItem(action.produces.itemId, action.produces.quantity, updatedInventory);

  return updatedInventory;
}

function addItem(itemId, quantity, inventory)
{
  const item = itemList.find(item => item.id === itemId);

  if( !item || quantity <= 0)
    return inventory;

  const itemExists = inventory.some(item => item.id === itemId);

  if( itemExists)
    return inventory.map(item => item.id === itemId ? { ...item, count: item.count + quantity } : item);

  return [...inventory, { ...item, count: quantity }];
}

function removeItem(itemId, quantity, inventory)
{
  if( quantity <= 0)
    return inventory;

  return inventory.map(item => item.id === itemId ? { ...item, count: item.count - quantity } : item).filter(item => item.count > 0);
}