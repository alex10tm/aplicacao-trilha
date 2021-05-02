
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('relatorios').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('relatorios').insert([
        {
          nome: "matematica"
        },
        {
          nome: "fisica"
        },
        {
          nome: "quimica"
        },
        {
          nome: "geografia"
        }
        /* {
          materia_id: 1,
          referencia: "matematica",
          tipo: "teoria"
        },
        {
          materia_id: 2,
          referencia: "fisica",
          tipo: "teoria"
        },
        {
          materia_id: 3,
          referencia: "quimica",
          tipo: "questao"
        },
        {
          materia_id: 4,
          referencia: "geografia",
          tipo: "questao"
        } */
      ]);
    });
};
