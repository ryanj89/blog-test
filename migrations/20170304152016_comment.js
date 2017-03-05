
exports.up = (knex) => {
  return knex.schema.createTable('comment', (comment) => {
    comment.increments();
    comment.text('body');
    comment.timestamp('created_at').defaultTo(knex.fn.now());
    comment.integer('post_id').references('id').inTable('post');
    comment.integer('blog_user_id').references('id').inTable('blog_user');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('comment');
};
