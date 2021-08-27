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
const appURL = 'https://tailwindproject.vercel.app';
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: appURL, credentials: true }));
var forceSsl = function (req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get(appURL), req.url].join(''));
  }
  return next();
};

// app.set('trust proxy', 1);
app.configure(function () {
  app.use(forceSsl);

  app.use(express.json());
  app.use(express.static('static'));

  app.use(
    fileUpload({
      createParentPath: true,
    }),
  );

  app.use(cookieParser());

  app.use('/api', userRouter);
  app.use('/api', resumeRouter);
  app.use('/api', vacancyRouter);
  app.use(ErrorHandler);
});
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
