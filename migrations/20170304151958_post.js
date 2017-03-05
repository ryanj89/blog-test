
exports.up = (knex) => {
  return knex.schema.createTable('post', (post) => {
    post.increments();
    post.string('title');
    post.text('body');
    post.timestamp('created_at').defaultTo(knex.fn.now());
    post.integer('author_id').references('id').inTable('author');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('post');
};
