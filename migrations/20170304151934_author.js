
exports.up = (knex) => {
  return knex.schema.createTable('author', (author) => {
    author.increments();
    author.string('name');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('author');
};
