
exports.up = async knex => {
  await knex.schema.createTable('materias', tbl =>{
    tbl.increments('id');
    tbl.text('nome', 256).notNullable();
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('materias');
};
