import axios from 'axios';
import React, {useState, useEffect} from 'react';
import MateriaForm from "./MateriaForm";
import MateriasList from "./MateriasList";

function Materias() {
  const [materiasList, setMateriaslist] = useState ([]);
  
  useEffect(() => {
    axios.get('http://localhost:4000/materias', {})
    .then (res => {
      setMateriaslist(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  
  const updateHandler = materia => {
    axios.put('http://localhost:4000/materias/'+materia.id, materia)
    .then (res => {
      setMateriaslist(materiasList.map(item => {
        if(item.id === materia.id) {
          return {
            ...item,
            nome: materia.nome
          }
        } else {
          return item
        }
      }))
    })
    .catch(err => {
      console.log(err)
    })
    
  }
  
  const deleteHandler = id => {
    axios.delete('http://localhost:4000/materias/'+id, {})
    .then (res => {
      const newMateriasList = materiasList.filter(item => {
        return item.id !== id
      })
      setMateriaslist(newMateriasList)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div>
      <div>
        <MateriaForm materiasList={materiasList} setMateriasList={setMateriaslist} />
        <MateriasList materiasList={materiasList} deleteHandler={deleteHandler} updateHandler={updateHandler} />
      </div>
    </div>
  );
}

export default Materias;
