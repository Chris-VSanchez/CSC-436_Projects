import { useState , useEffect } from "react";

import Action from "./Components/Action";
import Inventory from "./Components/Inventory";

import { actionList , meetsRequirements} from './gameLogic';

function App()
{
  const [inventory, setInventory] = useState([]);
  const [activeAction, setActiveAction] = useState(null);  
  const [selectedItem, setSelectedItem] = useState(null);

  function toggleAction(source)
  {
    if( activeAction === source) 
    {
      setActiveAction(null);
      return;
    }

    const action = actionList.find(action => action.source === source);

    if( !action || !meetsRequirements(action, inventory, selectedItem))
      return;

    setActiveAction(source);
  }

  useEffect(() => 
  {
    if( activeAction === null) 
      return;

    const action = actionList.find(action => action.source === activeAction);

    if( !action || !meetsRequirements(action, inventory, selectedItem))
      setActiveAction(null);

  }, [inventory, activeAction, selectedItem]);

  return (
    <>

      <Inventory inventory = {inventory} />
      
      { 
        actionList.map(action => <Action 
        key = {action.source} 
        action = {action} activeAction = {activeAction} onActivation = {toggleAction} 
        setInventory = {setInventory}
        selectedItem = {selectedItem} onItemSelect = {setSelectedItem} />)
      }

    </>
  );
}

export default App;