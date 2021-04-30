const mysql = require('mysql2 ')

//faltou criar o banco de dados...
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senha123',
  database: 'schema_trilha'
})