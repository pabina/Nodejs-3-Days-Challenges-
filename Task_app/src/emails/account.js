const sgMail = require('@sendgrid/mail')
const sendGridApiKeys= "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";


sgMail.setApiKey(sendGridApiKeys);

sgMail.send({
    to: "rimalpabina1234@gmail.com",
    from: "rimalpabina1114@gmail.com",
    subject:"This is my first creation from sendgrid",
    text:"I hope this reach to my next Email Account"
})
