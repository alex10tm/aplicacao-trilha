import axios from 'axios';
import React, {useState, useEffect} from 'react';
import RelatorioForm from "./RelatorioForm";
import RelatoriosList from "./RelatoriosList";

function Relatorios() {
  const [relatoriosList, setRelatorioslist] = useState ([]);
  
  useEffect(() => {
    axios.get('http://localhost:4000/Relatorios', {})
    .then (res => {
      setRelatorioslist(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  
  const updateHandler = relatorio => {
    axios.put('http://localhost:4000/relatorios/'+relatorio.id, relatorio)
    .then (res => {
      setRelatorioslist(relatoriosList.map(item => {
        if(item.id === relatorio.id) {
          return {
            ...item,
            nome: relatorio.nome
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
    axios.delete('http://localhost:4000/Relatorios/'+id, {})
    .then (res => {
      const newRelatoriosList = relatoriosList.filter(item => {
        return item.id !== id
      })
      setRelatorioslist(newRelatoriosList)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div>
      <div>
        <RelatorioForm relatoriosList={relatoriosList} setRelatoriosList={setRelatorioslist} />
        <RelatoriosList relatoriosList={relatoriosList} deleteHandler={deleteHandler} updateHandler={updateHandler} />
      </div>
    </div>
  );
}

export default Relatorios;
