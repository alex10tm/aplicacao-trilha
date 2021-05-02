import React, {useState} from 'react';

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