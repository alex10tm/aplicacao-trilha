import React from 'react';
import axios from "axios";

class CreateMateria extends React.Component {
  state = {
    materia: ""
  }
  
  onCriarClick = () =>{
    axios.post('http://localhost:4000/addMateria',{
      materia: this.state.materia
    })
    this.setState({materia: ""});
  }
  
  render() {
    console.log(this.state.materia)
    return (
      <div>
        <h1>Criar nova matéria</h1>
        <div className="ui input" >
          <input value={this.state.task} onChange={e => this.setState({
            materia: e.target.value
          })} placeholder="nome da matéria..." />
        </div>
        <button className="ui primary button basic"  onClick={
          () => this.onCriarClick()
        }>Criar</button>
      </div>
    )
  }
}

export default CreateMateria