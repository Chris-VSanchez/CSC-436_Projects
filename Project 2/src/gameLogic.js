/* Image Imports */
import catImage from './Assets/cat.png';
import catfishImage from './Assets/catfish.png';

/* Game Actions and Items*/
export const actionList = 
{
  woodcutting: 
  [
    {
      source: "Oak Tree", 
      action: "Cut", 
      produces: { itemId: 1 , quantity: 1 }, 
      tick: 900 
    },

    { 
      source: "Maple Tree", 
      action: "Cut", 
      produces: { itemId: 2 , quantity: 1 }, 
      tick: 1200 
    },

    { 
      source: "Mahogany Tree", 
      action: "Cut", 
      produces: { itemId: 3 , quantity: 1 }, 
      tick: 1500 
    },
    
    { 
      source: "Magic Tree", 
      action: "Cut", 
      produces: { itemId: 4 , quantity: 1 }, 
      tick: 1600 
    }
  ],

  fishing: 
  [
    {
      source: "Raw Shrimp",
      action: "Fish",
      produces: { itemId: 5 , quantity: 2 },
      tick: 3300
    },

    { 
      source: "Raw Carp", 
      action: "Fish", 
      produces: { itemId: 6 , quantity: 1 }, 
      tick: 3300 
    },

    { 
      source: "Raw Lobster", 
      action: "Fish", 
      produces: { itemId: 7 , quantity: 2 }, 
      tick: 4000
    },

    { 
      source: "Raw Swordfish", 
      action: "Fish", 
      produces: { itemId: 8 , quantity: 1 }, 
      tick: 4000 
    },

    { 
      source: "Catfish", 
      action: "Fish", 
      produces: { itemId: 9 , quantity: 1 }, 
      tick: 8000 
    }
  ],

  firemaking:
  [
    { 
      source: "Firemaking", 
      action: "Burn", 
      requiresAny: 
      [ 
        { 
          itemId: 1, 
          quantity: 2,
          produces: { itemId: 10 , quantity: 1 }
        }, 

        { 
          itemId: 2, 
          quantity: 2,
          produces: { itemId: 10 , quantity: 2 }
        }, 

        { 
          itemId: 3, 
          quantity: 1, 
          produces: { itemId: 10 , quantity: 2 }
        },

        { 
          itemId: 4, 
          quantity: 2, 
          produces: { itemId: 10 , quantity: 3 }
        }
      ], 
      tick: 2000 
    }
  ],

  cooking:
  [
    {
      source: "Cooking",
      action: "Cook",
      requiresAny: 
      [ 
        { 
          itemId: 5, 
          quantity: 1,
          produces: { itemId: 11 , quantity: 1 }
        }, 

        { 
          itemId: 6, 
          quantity: 1,
          produces: { itemId: 12 , quantity: 1 }
        }, 

        { 
          itemId: 7, 
          quantity: 1, 
          produces: { itemId: 13 , quantity: 1 }
        },

        { 
          itemId: 8, 
          quantity: 1, 
          produces: { itemId: 14 , quantity: 1 }
        }
      ], 
      tick: 3000
    },

    {
      source: "Cat",
      action: "Convert",
      requires: { itemId: 9, quantity: 1 },
      produces: { itemId: 15, quantity: 1 },
      tick: 10000
    }
  ]
};

export const itemList = 
[
  { 
    id: 1, 
    itemName: "Oak Logs", 
    image: "https://cdn2-main.melvor.net/assets/media/bank/logs_oak.png" 
  },

  { 
    id: 2, 
    itemName: "Maple Logs",
    image: "https://cdn2-main.melvor.net/assets/media/bank/logs_maple.png" 
  },
  
  { 
    id: 3, 
    itemName: "Mahogany Logs", 
    image: "https://cdn2-main.melvor.net/assets/media/bank/logs_mahogany.png" 
  },
  
  { 
    id: 4, 
    itemName: "Magic Logs", 
    image: "https://cdn2-main.melvor.net/assets/media/bank/logs_magic.png" 
  },
  
  { 
    id: 5, 
    itemName: "Raw Shrimp", 
    image: "https://cdn2-main.melvor.net/assets/media/bank/shrimp.png" 
  },
  
  { 
    id: 6, 
    itemName: "Raw Carp", 
    image: "https://cdn2-main.melvor.net/assets/media/bank/carp.png" 
  },
  
  { 
    id: 7, 
    itemName: "Raw Lobster", 
    image: "https://cdn2-main.melvor.net/assets/media/bank/lobster.png" 
  },
  
  { 
    id: 8, 
    itemName: "Raw Swordfish", 
    image: "https://cdn2-main.melvor.net/assets/media/bank/swordfish.png" 
  },
  
  { 
    id: 9, 
    itemName: "Catfish",
    image: catfishImage
  },
  
  { 
    id: 10, 
    itemName: "Ash",
    image: "https://cdn2-main.melvor.net/assets/media/bank/ashes.png"
  },
  
  { 
    id: 11, 
    itemName: "Cooked Shrimp",
    image: "https://cdn2-main.melvor.net/assets/media/bank/shrimp_cooked.png" 
  },
  
  { 
    id: 12, 
    itemName: "Cooked Carp",
    image: "https://cdn2-main.melvor.net/assets/media/bank/carp_cooked.png"
  },
  
  { 
    id: 13, 
    itemName: "Cooked Lobster",
    image: "https://cdn2-main.melvor.net/assets/media/bank/lobster_cooked.png"
  },
  
  { 
    id: 14, 
    itemName: "Cooked Swordfish",
    image: "https://cdn2-main.melvor.net/assets/media/bank/swordfish_cooked.png"
  },
  
  { 
    id: 15, 
    itemName: "Cat",
    image: catImage
  }
];


/* Helper Functions */
export function findAction(source)
{
  return Object.values(actionList).flat().find(action => action.source === source);
}

export function getRecipe(multipleRecipes, itemId)
{
  return multipleRecipes.find(item => item.itemId === itemId);
}

export function getItem(itemId)
{
  return itemList.find(item => item.id === itemId);
}

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
  const action = findAction(source);

  if( !action || !meetsRequirements(action, currentInventory, selectedItem))
    return currentInventory;

  let updatedInventory = currentInventory;
  let output = action.produces;

  if( action.requires)
    updatedInventory = removeItem(action.requires.itemId, action.requires.quantity, updatedInventory);

  if( action.requiresAny)
  {
    const requirement = action.requiresAny.find(item => item.itemId === selectedItem);
    
    updatedInventory = removeItem(requirement.itemId, requirement.quantity, updatedInventory);

    output = requirement.produces;
  }

  updatedInventory = addItem(output.itemId, output.quantity, updatedInventory);

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