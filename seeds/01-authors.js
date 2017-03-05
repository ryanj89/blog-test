
exports.seed = (knex) => {
  return knex('author').del()
    .then(() => {
      // Inserts seed entries
      return knex('author').insert([
        {
          name: 'Ryan Johnson',
        },
        {
          name: 'Lindsay Bendell',
        },
        {
          name: 'Murphy Johnson',
        },
      ]);
    });
};
