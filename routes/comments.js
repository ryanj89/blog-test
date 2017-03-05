const router = require('express').Router();
const db = require('../data/comment-api');

// Get all comments
router.get('/', (req, res) => {
  db.getComments().then(comments => res.send(comments));
});

// Get comment
router.get('/:id', (req, res) => {
  db.getComment(req.params.id).then(comment => res.send(comment));
});

// Add comment
router.post('/', (req, res) => {
  db.addComment(req.body).then(() => res.redirect('/comments'));
});

// Edit comment
router.patch('/:id', (req, res) => {
  db.updateComment(req.params.id, req.body).then(id => res.redirect(`/comments/${id}`));
});

// Delete comment
router.delete('/:id', (req, res) => {
  db.deleteComment(req.params.id).then(id => res.send(`Deleted comment id: ${id}`));
});

module.exports = router;
