const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'queuetest021@gmail.com',
      pass: 'fjsylgdpxswyqert'
    }
});
  
const mailOptions = {
    from: 'queuetest021@gmail.com',
    to: 'mateoziffer@gmail.com',
    subject: 'Subject',
    text: 'Hello World',
    html: '<a href="https://nodemailer.com/message/">link</a>'
};
  
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
   console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      // do something useful
    }
});

