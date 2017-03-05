const router = require('express').Router();
const db = require('../data/post-api');

// Get all posts
router.get('/', (req, res) => {
  db.getPosts().then(posts => res.send(posts));
});

// Get post
router.get('/:id', (req, res) => {
  db.getPost(req.params.id).then(post => res.send(post));
});

// Add post
router.post('/', (req, res) => {
  db.addPost(req.body).then(() => res.redirect('/posts'));
});

// Edit post
router.patch('/:id', (req, res) => {
  db.updatePost(req.params.id, req.body).then(id => res.redirect(`/posts/${id}`));
});

// Delete post
router.delete('/:id', (req, res) => {
  db.deletePost(req.params.id).then(id => res.send(`Deleted post id: ${id}`));
});

module.exports = router;
