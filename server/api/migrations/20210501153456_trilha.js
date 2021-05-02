
exports.up = async knex => {
  await knex.schema.createTable('materias', tbl =>{
    tbl.increments('id');
    tbl.text('nome', 256).notNullable();
  })
  await knex.schema.createTable('relatorios', tbl =>{
    tbl.increments('id');
    tbl.text('nome', 256).notNullable();
/*     tbl.int('materia_id');
    tbl.text('referencia', 256).notNullable();
    tbl.text('tipo', 256).notNullable(); */
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('materias');
  await knex.schema.dropTableIfExists('relatorios');
};
