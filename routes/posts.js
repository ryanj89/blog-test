const router = require('express').Router();
const db = require('../data/api');

router.get('/', (req, res) => {
  db.getPosts().then(posts => res.send(posts));
});

router.get('/:id', (req, res) => {
  db.getPost(req.params.id).then(post => res.send(post));
});

router.post('/', (req, res) => {
  db.createPost(req.body).then(() => res.redirect('/posts'));
});

router.patch('/:id', (req, res) => {
  db.updatePost(req.params.id, req.body).then(id => res.redirect(`/posts/${id}`));
});

router.delete('/:id', (req, res) => {
  db.deletePost(req.params.id).then(id => res.send(`Deleted post id: ${id}`));
});

module.exports = router;
