const config = require('../setting/config').config;
const utilsValue = require('../utils/value');

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: config.serverMail,
    pass: config.serverMailKey,
  },
});

function sendMail(subject,content,toMail,callback){
    transporter.sendMail({
        from: config.serverMail,
        to: toMail,
        subject: subject,
        html: content,
      }).then(info => {
        callback(true,info)
      }).catch(e=> {
        callback(false,e)
      })
}

exports.sendMail = sendMail