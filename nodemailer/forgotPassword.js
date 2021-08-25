const nodemailer = require('nodemailer');

module.exports = async function passwordMailer(email, link) {
  console.log(link);
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
    text: `Чтобы восстановить пароль перейдите по ссылке ${process.env.SERVER_URL}`,
    html: `<a href=${process.env.SERVER}/forgotPassword/${link}>Ссылка для смены пароля</a>`,
  });
};
