
exports.up = (knex) => {
  return knex.schema.createTable('blog_user', (user) => {
    user.increments();
    user.string('name');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('blog_user');
};
