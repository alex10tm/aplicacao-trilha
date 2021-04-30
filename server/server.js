const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/listaDinamica', (req, res) =>{
  const LISTA_QUERY = 'select * from schema_trilha.vw_relatorio_materia'
  connection.query(LISTA_QUERY, (err) =>{
    if(err) console.log(err)
    else res.send(response)
  })
})

app.post('/addMateria', (req, res) =>{
  const ADD_QUERY = 'insert into schema_trilha.materias (nome) values ('+req.body.materia+')'
  connection.query(ADD_QUERY, (err) =>{
    if(err) console.log(err)
    else res.send('materia adicionada')
  })
})

//faltou criar a tabela, pra poder ter o comando. assim passando cada valor para cada coluna
app.post('/addRelatorio', (req, res) =>{
  const ADD_QUERY = 'insert into schema_trilha.relatorios (referencia) values ('+req.body.relatorio+')'
  connection.query(ADD_QUERY, (err) =>{
    if(err) console.log(err)
    else res.send('relatorio adicionado')
  })
})

app.delete('/deletarMateria/:id_relatoriomateria', (req, res) =>{
  res.send('você pode deletar uma matéria')
})

app.delete('/deletarRelatorio/:id_relatorio', (req, res) =>{
  console.log(req.params.id_relatorio)
  const DELETE_RELATORIO_QUERY = 'delete from schema_trilha.relatorios where (id='+req.params.id_relatorio+')'
  connection.query(DELETE_RELATORIO_QUERY, (err) =>{
    if(err) console.log(err)
  })
})

const port = 4000

app.listen(port, () => {
  console.log('server running on port '+ port)
})