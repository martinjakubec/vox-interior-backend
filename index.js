const dotenv = require('dotenv').config();

// CONSTANTS
const PORT = process.env.PORT;
const MODE = process.env.MODE;
const JWT_SECRET = process.env.JWT_SECRET;
const MONGODB_URL = process.env.MONGODB_URL;

// NPM IMPORTS
const express = require('express');
const subdomain = require('express-subdomain');
const helmet = require('helmet');
const JWTverify = require('@mjakubec/jwt-verify');
const mongoose = require('mongoose');

// SETUP
const app = express();
mongoose.connect(MONGODB_URL, () => {
  console.log('connected to mongodb');
});

// MIDDLEWARE
app.use(helmet());
app.use(JWTverify(JWT_SECRET));

// ROUTERS
const editorRouter = require('./routers/editor/editorRouter');
const userRouter = require('./routers/userRouter')
app.use(subdomain('editor', editorRouter));
app.use('/user', userRouter)

// DEFAULT ROUTES
app.get('/', (req, res) => {
  res.send('Hello there');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
