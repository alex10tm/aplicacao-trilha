import React, {useState} from 'react';
import MateriaForm from "./MateriaForm";
import MateriasList from "./MateriasList";

const materias = [
  {id: 1, nome: 'oi'},
  {id: 2, nome: 'te'},
  {id: 3, nome: 'ogai'}
]

function Materias() {
  const [materiasList, setMateriaslist] = useState (materias);
  
  const updateHandler = () => {

  }
  
  const deleteHandler = id => {
    const newMateriasList = materiasList.filter(item => {
      return item.id !== id
    })
    setMateriaslist(newMateriasList)
  }
  
  return (
    <div>
      <h3>Matérias</h3>
      <div>
        <MateriaForm materiasList={materiasList} setMateriasList={setMateriaslist} />
        <MateriasList materiasList={materiasList} deleteHandler={deleteHandler} updateHandler={updateHandler} />
      </div>
    </div>
  );
}

export default Materias;
