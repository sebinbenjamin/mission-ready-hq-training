const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.server.com', // your smtp server here
  port: 2525, // Connection port
  // secure: true, // Use SSL or not
  auth: {
    user: '', // SMTP login user
    pass: '', // SMTP login pass
  },
});

const htmlTemplate = `

`;
const mailOptions = {
  from: 'sebinbenjamin@gmail.com',
  to: 'sebinbenjamin@gmail.com', // <= recepient email address. ex. 'friendemail@gmail.com'
  subject: 'Testing email service',
  html: htmlTemplate,
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error.message);
  }
  console.log('Message sent: %s', info.messageId);
});
