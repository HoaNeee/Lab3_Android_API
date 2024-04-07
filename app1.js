const express = require('express');
const mailer = require('nodemailer');

const app = express();

// tao transporter
let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nhhoa03@gmail.com',
        pass: 'qxlg wxhr hahn wddt'
    }
});

//gui mail

let mailOption = {
    from: 'nhhoa03@gmail.com',
    to: 'hoa7cvodoi@gmail.com',
    subject: 'test email',
    text: 'email test ne'
};

// gui mail
transporter.sendMail(mailOption,(error, info) =>{
    if(error){
        console.error(error);
    }
    else{
        console.log('Thanh cong:' +info.messageId );
    }
});

//khoi dong server

app.listen(3004, () =>{
    console.log('server dang chay o cong 3304');
})