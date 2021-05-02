import ListaDinamica from "./components/listaDinamica";
import CreateMateria from "./components/createMateria";
import CreateRelatorio from "./components/createRelatorio";

function App() {
  return (
    <div className="App">
      <h3>Matérias e Relatórios</h3>
      <div>
        <CreateMateria />
        <CreateRelatorio />
      </div>
      <div>
        <ListaDinamica /> 
      </div>
    </div>
  );
}

export default App;
