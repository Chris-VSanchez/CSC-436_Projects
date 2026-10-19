import Action from './Action'

import './components.css'

function Skill( { skill , actions , activeAction , onActivation , setInventory , selectedItems , onItemSelect } )
{
  return (
    <section>
                
      <h2 className = {`skill ${skill.toLowerCase()}`}>{skill}</h2>
    
      <div className = "actions">
        { 
            actions.map(action => <Action
            key = {action.source} 
            action = {action} activeAction = {activeAction} onActivation = {onActivation} 
            setInventory = {setInventory}
            selectedItems = {selectedItems} onItemSelect = {onItemSelect} />)
        }
      </div>
    
    </section>
  )
}

export default Skill;