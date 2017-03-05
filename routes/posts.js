const router = require('express').Router();
const knex = require('../data/queries');

router.get('/', (req, res) => {
  knex.getPosts().then(posts => res.send(posts));
});

router.get('/:id', (req, res) => {
  knex.getPost(req.params.id).then(post => res.send(post));
});

router.post('/', (req, res) => {
  knex.createPost(req.body).then(() => res.redirect('/posts'));
});

router.patch('/:id', (req, res) => {
  knex.updatePost(req.params.id, req.body).then(id => res.redirect(`/posts/${id}`));
});

router.delete('/:id', (req, res) => {
  knex.deletePost(req.params.id).then(id => res.send(`Deleted post id: ${id}`));
});

module.exports = router;
