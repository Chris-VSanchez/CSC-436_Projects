import { useState , useEffect } from "react";

import Skill from "./Components/Skill";
import Inventory from "./Components/Inventory";

import { actionList , findAction , meetsRequirements} from './gameLogic';

function App()
{
  const [inventory, setInventory] = useState([]);
  const [activeAction, setActiveAction] = useState(null);  
  const [selectedItems, setSelectedItems] = useState({});

  function toggleAction(source)
  {
    if( activeAction === source) 
    {
      setActiveAction(null);
      return;
    }

    const action = findAction(source);
    const selectedItem = selectedItems[source] ?? null;

    if( !action || !meetsRequirements(action, inventory, selectedItem))
      return;

    setActiveAction(source);
  }

  const activeItem = activeAction === null ? null : selectedItems[activeAction] ?? null;

  useEffect(() => 
  {
    if( activeAction === null) 
      return;

    const action = findAction(activeAction);

    if( !action || !meetsRequirements(action, inventory, activeItem))
      setActiveAction(null);

  }, [inventory, activeAction, activeItem]);

  return (
    <>

      <Inventory inventory = {inventory} />
      
      {  
        Object.entries(actionList).map(([skill, actions]) => (<Skill
        key = {skill} skill = {skill} 
        actions = {actions} activeAction = {activeAction} onActivation = {toggleAction}
        setInventory = {setInventory}
        selectedItems = {selectedItems} onItemSelect = {setSelectedItems} />))
      }

    </>
  );
}

export default App;