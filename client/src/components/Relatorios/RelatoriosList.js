import React from 'react';
import Relatorio from './Relatorio';

function RelatoriosList({relatoriosList, deleteHandler, updateHandler}) {
  return(
    <div>
      {
        relatoriosList.map(relatorio => {
          return <Relatorio key={relatorio.id} relatorio={relatorio}  deleteHandler={deleteHandler} updateHandler={updateHandler} />
        })
      }
    </div>
  )
}

export default RelatoriosList;