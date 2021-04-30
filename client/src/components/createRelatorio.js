import React from 'react';
import axios from "axios";
import getLitaDinamica from "./listaDinamica";

//faltou criar itens para corresponderem cada valor de cada coluna da tabela
//faltou criar o item que procura por matérias e mostra opções de seleção
class CreateRelatorio extends React.Component {
  state = {
    relatorio: ""
  }
  
  onCriarClick = () =>{
    axios.post('http://localhost:4000/addRelatorio',{
      relatorio: this.state.relatorio
    });
    this.getLitaDinamica();
    this.setState({relatorio: ""});
  }

  render() {
    console.log(this.state.relatorio)
    return (
      <div>
        <h1>Criar novo relatório</h1>
        <div className="ui input" >
          <input value={this.state.task} onChange={e => this.setState({
            relatorio: e.target.value
          })} placeholder="referência..." />
        </div>
        <button className="ui primary button basic"  onClick={
          () => this.onCriarClick()
        }>Criar</button>
        <hr />
      </div>
    )
  }
}

export default CreateRelatorio