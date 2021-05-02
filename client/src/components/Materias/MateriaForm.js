import React, {useState} from 'react';
import axios from 'axios';

function MateriaForm({materiasList, setMateriasList}) {
  
  const [materia, setMateria] = useState({
    id: '',
    nome: ''
  });
  
  const handleChange = e => {
    setMateria({
      id: Date.now(),
      nome: e.target.value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:4000/materias', materia)
    .then (res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    setMateriasList([...materiasList, materia])
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="materia"
        value={materia.nome}
        placeholder="nome da matéria..."
        onChange={handleChange}
      />
      <button type="submit">Adicionar matéria</button>
    </form>
  )
}

export default MateriaForm;