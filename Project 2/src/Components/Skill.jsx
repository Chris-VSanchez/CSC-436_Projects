import Action from './Action'

function Skill( { skill , actions , activeAction , onActivation , setInventory , selectedItems , onItemSelect } )
{
  return (
    <section>
                
      <h2>{skill}</h2>
    
      <div>
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