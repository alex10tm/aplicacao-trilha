
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('materias').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('materias').insert([
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
      ]);
    });
};
