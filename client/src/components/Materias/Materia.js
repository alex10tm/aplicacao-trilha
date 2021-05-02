import React from 'react';

function Materia({materia, deleteHandler, updateHandler}) {
  return(
    <div>
      <button onClick={() => updateHandler(materia.id)} >Editar</button>
      {materia.nome}
      <button onClick={() => deleteHandler(materia.id)} >X</button>
    </div>
  )
}

export default Materia;