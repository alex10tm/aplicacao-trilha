const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./dbConfig');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) =>{
  
})

server.get('/trilha', async (req, res) =>{
  try {
    const materias = await db('materias');
    res.json(materias)
  } catch(err) {
    console.log(err);
  }
});

server.get('/materias', async (req, res) =>{
  try {
    const materias = await db('materias');
    res.json(materias)
  } catch(err) {
    console.log(err);
  }
});

server.get('/materias/:id', async (req, res) =>{
  const {id} = req.params

  try {
    const materiaEncontrada = await db('materias').where({id})
    materiaEncontrada.length === 0 ? res.status(404).json({message: 'materia nao encontrada'}) : res.status(200).json(materiaEncontrada)
  } catch(err) {
    console.log(err);
  }
});

server.post('/materias', async (req, res) =>{
  const {nome} = req.body
  if(!nome){
    return res.status(400).json({message: 'você precisa enviar um nome para a nova materia'})
  }
  try {
    await db('materias').insert({nome})
    res.status(201).json({message: 'materia inserida com sucesso'})
  } catch(err){
    console.log(err);
  }
});

server.put('/materias/:id', async (req, res) =>{
  const {id} = req.params
  const {nome} = req.body

  try {
    await db('materias').where({id}).update({nome})
    res.status(200).json({message: 'registro atualizado com sucesso'})
  } catch(err) {
    console.log(err);
  }
});

server.delete('/materias/:id', async (req, res) =>{
  const {id} = req.params

  try {
    await db('materias').where({id}).del()
    res.status(200).json({message: 'registro deletado com sucesso'})
  } catch(err) {
    console.log(err);
  }
});

server.get('/relatorios', async (req, res) =>{
  try {
    const relatorios = await db('relatorios');
    res.json(relatorios)
  } catch(err) {
    console.log(err);
  }
});

server.get('/relatorios/:id', async (req, res) =>{
  const {id} = req.params

  try {
    const relatorioEncontrada = await db('relatorios').where({id})
    relatorioEncontrada.length === 0 ? res.status(404).json({message: 'relatorio nao encontrada'}) : res.status(200).json(relatorioEncontrada)
  } catch(err) {
    console.log(err);
  }
});

server.post('/relatorios', async (req, res) =>{
  const {nome} = req.body
  if(!nome){
    return res.status(400).json({message: 'você precisa enviar um nome para a nova relatorio'})
  }
  try {
    await db('relatorios').insert({nome})
    res.status(201).json({message: 'relatorio inserida com sucesso'})
  } catch(err){
    console.log(err);
  }
});

server.put('/relatorios/:id', async (req, res) =>{
  const {id} = req.params
  const {nome} = req.body

  try {
    await db('relatorios').where({id}).update({nome})
    res.status(200).json({message: 'registro atualizado com sucesso'})
  } catch(err) {
    console.log(err);
  }
});

server.delete('/relatorios/:id', async (req, res) =>{
  const {id} = req.params

  try {
    await db('relatorios').where({id}).del()
    res.status(200).json({message: 'registro deletado com sucesso'})
  } catch(err) {
    console.log(err);
  }
});

module.exports = server;