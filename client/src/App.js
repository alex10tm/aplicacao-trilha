import './App.css';
import React from 'react';
import Materias from "./components/Materias";
import Relatorios from "./components/Relatorios";

function App() {
  return (
    <div className="App">
    <h3>Matérias:</h3>
    <div>
      <Materias />
    </div>
      <h3>Relatórios:</h3>
      <div>
        <Relatorios />
      </div>
    </div>
  );
}

export default App;
