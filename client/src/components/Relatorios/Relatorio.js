import React, {useState} from 'react';

function Relatorio({relatorio, deleteHandler, updateHandler}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedRelatorio, setUpdatedRelatorio] =useState(false);
  
  const updateStateRelatorio = e => {
    setUpdatedRelatorio({
      id: relatorio.id,
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
      <form onSubmit={e => updateAndReset(updatedRelatorio, e)}>
        <input
          type="text"
          defaultValue={relatorio.nome}
          onChange={updateStateRelatorio}
        />
      </form>
      :
      <p onDoubleClick={() => setIsEditing(true)}>{relatorio.nome}</p>}
      <button onClick={() => deleteHandler(relatorio.id)} >X</button>
    </div>
  )
}

export default Relatorio;