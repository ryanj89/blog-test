const database = require('./knex');

function getPosts() {
  return database('post');
}

function getPost(id) {
  return database('post').where('id', id);
}

function createPost(post) {
  return database('post').insert(post);
}

function updatePost(id, post) {
  return database('post').where('id', id).update(post, 'id');
}

function deletePost(id) {
  return database('post').where('id', id).del().returning('id');
}

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
