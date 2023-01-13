
const sgMail= require("@sendgrid/mail");
const dotenv=require("dotenv");


dotenv.config();



sgMail.setApiKey(process.env.sendGridApiKeys);

sgMail.send({
    to: "rimalpabina1234@gmail.com",
    from: "rimalpabina1114@gmail.com",
    subject:"This is my first creation from sendgrid",
    text:"I hope this reach to my next Email Account"
})
