const db = require('./knex');

// API: /posts
module.exports = {
  getPosts: () => db('post'),
  getPost: id => db('post').where('id', id),
  addPost: post => db('post').insert(post),
  updatePost: (id, post) => db('post').where('id', id).update(post, 'id'),
  deletePost: id => db('post').where('id', id).del().returning('id'),
};
