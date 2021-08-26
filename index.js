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

app.use(cors({ origin: 'https://tailwind-project3.herokuapp.com', credentials: true }));
app.all('*', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://tailwind-project3.herokuapp.com');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.set('trust proxy', 1); // optional, not needed for secure cookies
app.use(
  session({
    name: 'random_session',
    secret: 'yryGGeugidx34otGDuSF5sD9R8g0Gü3r8',
    resave: false,
    saveUninitialized: true,
    cookie: {
      path: '/',
      secure: true,
      domain: '.herokuapp.com',
      httpOnly: true,
    },
  }),
);
app.use(cookieParser());
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
