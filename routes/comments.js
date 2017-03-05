const router = require('express').Router();
const db = require('../data/api');

router.get('/', (req, res) => {
  db.getComments().then(comments => res.send(comments));
});

router.get('/:id', (req, res) => {
  db.getComment(req.params.id).then(comment => res.send(comment));
});

router.post('/', (req, res) => {
  db.createComment(req.body).then(() => res.redirect('/comments'));
});

router.patch('/:id', (req, res) => {
  db.updateComment(req.params.id, req.body).then(id => res.redirect(`/comments/${id}`));
});

router.delete('/:id', (req, res) => {
  db.deleteComment(req.params.id).then(id => res.send(`Deleted comment id: ${id}`));
});

module.exports = router;
