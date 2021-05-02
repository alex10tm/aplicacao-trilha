import React from 'react';
import Materia from './Materia';

function MateriasList({materiasList, deleteHandler, updateHandler}) {
  return(
    <div>
      {
        materiasList.map(materia => {
          return <Materia key={materia.id} materia={materia}  deleteHandler={deleteHandler} updateHandler={updateHandler} />
        })
      }
    </div>
  )
}

export default MateriasList;