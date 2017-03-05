const morgan = require('morgan');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const posts = require('./routes/posts');
const comments = require('./routes/comments');

const app = express();
const port = process.env.PORT || 8000;

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/posts', posts);
app.use('/comments', comments);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
