const db = require('./knex');

// API: /posts
module.exports = {
  getPosts: () => db('post'),
  getPost: id => db('post').where('id', id),
  createPost: post => db('post').insert(post),
  updatePost: (id, post) => db('post').where('id', id).update(post, 'id'),
  deletePost: id => db('post').where('id', id).del().returning('id'),
  getComments: () => db('comment'),
  getComment: id => db('comment').where('id', id),
  createComment: comment => db('comment').insert(comment),
  updateComment: (id, comment) => db('comment').where('id', id).update(comment, 'id'),
  deleteComment: id => db('comment').where('id', id).del().returning('id'),
};
