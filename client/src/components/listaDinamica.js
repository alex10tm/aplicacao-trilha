import React from 'react';
import axios from 'axios';

class ListaDinamica extends React.Component {
  state = {
    ListaDinamica: []
  }
  
  getLitaDinamica = () =>{
    axios.get('http://localhost:4000/listaDinamica')
    .then((response) => response.data)
    .then(response => this.state({ListaDinamica: response}))
  }

  onDeleteClick = id_relatorio =>{
    axios.delete('http://localhost:4000/deletarRelatorio/'+id_relatorio);
    this.getLitaDinamica();
  }

  render() {
    return (
      <div>
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="meta">
                {ListaDinamica.refeencia}
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div className="ui basic red button" onClick={
                    () => this.onDeleteClick(ListaDinamica.id_relatorio)
                  }>Deletar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListaDinamica