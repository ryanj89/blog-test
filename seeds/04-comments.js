
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(() => {
      return knex('post').select('id');
    })
    .then((postIds) => {
      // Inserts seed entries
      return knex('comment').insert([
        {
          body: 'Great article! Very interesting.',
          post_id: postIds[0].id,
          blog_user_id: 1,
        },
        {
          body: 'Good read, I can\'t wait to hear more!',
          post_id: postIds[0].id,
          blog_user_id: 2,
        },
        {
          body: 'What\'s up man!',
          post_id: postIds[1].id,
          blog_user_id: 2,
        },
      ]);
    });
};
