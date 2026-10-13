import { useState , useEffect } from "react";

import Action from "./Components/Action";
import Inventory from "./Components/Inventory";

import { actionList , findAction , meetsRequirements} from './gameLogic';

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

    const action = findAction(source);

    if( !action || !meetsRequirements(action, inventory, selectedItem))
      return;

    setActiveAction(source);
  }

  useEffect(() => 
  {
    if( activeAction === null) 
      return;

    const action = findAction(source);

    if( !action || !meetsRequirements(action, inventory, selectedItem))
      setActiveAction(null);

  }, [inventory, activeAction, selectedItem]);

  return (
    <>

      <Inventory inventory = {inventory} />
      
      {
        Object.entries(actionList).map(([category, actions]) => (
          <section key = {category}>
            
            <h2>{category}</h2>
      
            { 
              actions.map(action => <Action 
              key = {action.source} 
              action = {action} activeAction = {activeAction} onActivation = {toggleAction} 
              setInventory = {setInventory}
              selectedItem = {selectedItem} onItemSelect = {setSelectedItem} />)
            }

          </section>
      ))}

    </>
  );
}

export default App;