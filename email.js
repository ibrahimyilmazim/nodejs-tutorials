var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ibrahim@vivi.com.tr',
    pass: '6534562askim'
  }
});

var mailOptions = {
  from: 'ibrahim@vivi.com.tr',
  to: 'ibrahimyilmazinfo@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});