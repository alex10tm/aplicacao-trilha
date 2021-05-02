import React, {useState} from 'react';
import axios from 'axios';

function RelatorioForm({relatoriosList, setRelatoriosList}) {
  
  const [relatorio, setRelatorio] = useState({
    id: '',
    nome: ''
  });
  
  const handleChange = e => {
    setRelatorio({
      id: Date.now(),
      nome: e.target.value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:4000/relatorios', relatorio)
    .then (res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    setRelatoriosList([...relatoriosList, relatorio])
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Relatorio"
        value={relatorio.nome}
        placeholder="nome da matéria..."
        onChange={handleChange}
      />
      <button type="submit">Adicionar relatório</button>
    </form>
  )
}

export default RelatorioForm;