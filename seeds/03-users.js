
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('blog_user').del()
    .then(() => {
      // Inserts seed entries
      return knex('blog_user').insert([
        {
          name: 'Jesse Slavens',
        },
        {
          name: 'Lloyd Wickboldt',
        },
        {
          name: 'Rachel Herrera',
        },
      ]);
    });
};
