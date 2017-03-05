
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(() => {
      return knex('author').select('id');
    })
    .then((authorIds) => {
      // Inserts seed entries
      return knex('post').insert([
        {
          title: 'My First Post',
          body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
          author_id: authorIds[0].id,
        },
        {
          title: "Murphy's Day Out",
          body: 'I loved going to the park! It was so much fun.',
          author_id: authorIds[1].id,
        },
        {
          title: "Lindsay's Graduation",
          body: "It's almost time!",
          author_id: authorIds[2].id,
        },
      ]);
    });
};
