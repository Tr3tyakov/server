const nodemailer = require('nodemailer');

module.exports = async function transportMailer(email, link) {
  console.log(email, link);
  let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: 'Hello ✔',
    text: `Подтверждение аккаунта на сайте ${process.env.SERVER_URL}`,
    html: `<a href=${process.env.SERVER_URL}/api/activate/${link}>Ссылка для активации аккаунта</a>`,
  });
};
