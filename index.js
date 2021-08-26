require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRouter = require('./Routers/useRouter');
const vacancyRouter = require('./Routers/vacancyRouter');
const resumeRouter = require('./Routers/resumeRouter');
const ErrorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('static'));

app.use(
  fileUpload({
    createParentPath: true,
  }),
);

app.enable('trust proxy'); // optional, not needed for secure cookies
app.use(
  cors({
    origin: 'https://tailwindproject.vercel.app',
    credentials: true,
  }),
);
app.use(
  session({
    name: 'random_session',
    secret: 'random_secret',
    resave: false,
    saveUnitialized: true,
    cookie: {
      path: '/',
      secure: true,
      domain: '.vercel.app',
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 1000,
    },
  }),
);
app.use(cookieParser('random_secret'));
app.use('/api', userRouter);
app.use('/api', resumeRouter);
app.use('/api', vacancyRouter);
app.use(ErrorHandler);
const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`SERVER HAS BEEN STARTED ${PORT}`));
  } catch (e) {
    console.log(e, e.message, 'SERVER');
  }
};

start();
