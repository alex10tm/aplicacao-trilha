import React, {useState} from 'react';

function Materia({materia, deleteHandler, updateHandler}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedMateria, setUpdatedMateria] =useState(false);
  
  const updateStateMateria = e => {
    setUpdatedMateria({
      id: materia.id,
      nome: e.target.value
    })
  }
  
  const updateAndReset = (input, e) => {
    e.preventDefault()
    updateHandler(input)
    setIsEditing(false)
  }
  
  return(
    <div>
      {isEditing ?
      <form onSubmit={e => updateAndReset(updatedMateria, e)}>
        <input
          type="text"
          defaultValue={materia.nome}
          onChange={updateStateMateria}
        />
      </form>
      :
      <p onDoubleClick={() => setIsEditing(true)}>{materia.nome}</p>}
      <button onClick={() => deleteHandler(materia.id)} >X</button>
    </div>
  )
}

export default Materia;