const db = require('./knex');

// API: /comments
module.exports = {
  getComments: () => db('comment'),
  getComment: id => db('comment').where('id', id),
  addComment: comment => db('comment').insert(comment),
  updateComment: (id, comment) => db('comment').where('id', id).update(comment, 'id'),
  deleteComment: id => db('comment').where('id', id).del().returning('id'),
};
