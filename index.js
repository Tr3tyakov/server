require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRouter = require('./Routers/useRouter');
const vacancyRouter = require('./Routers/vacancyRouter');
const resumeRouter = require('./Routers/resumeRouter');
const ErrorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const sslRedirect = require('heroku-ssl-redirect');
const fileUpload = require('express-fileupload');
const app = express();

const PORT = process.env.PORT || 5000;
const appURL = 'https://tailwindproject.vercel.app';
app.use(cors({ origin: appURL, credentials: true }));
app.get('*', function (req, res, next) {
  if ('https' !== req.headers['x-forwarded-proto'] && 'production' === process.env.NODE_ENV) {
    res.redirect('https://' + req.hostname + req.url);
  } else {
    next();
  }
});
app.use(express.json());
app.use(express.static('static'));

app.use(
  fileUpload({
    createParentPath: true,
  }),
);
app.use(sslRedirect());
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
