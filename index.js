const dotenv = require('dotenv').config()
const express = require('express');
const subdomain = require('express-subdomain');
const helmet = require('helmet');

const app = express();

app.use(helmet());

const editorRouter = require('./routers/editorRouter.js')
app.use(subdomain('editor', editorRouter))

app.get('/', (req, res) => {
  res.send('Hello there')
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})