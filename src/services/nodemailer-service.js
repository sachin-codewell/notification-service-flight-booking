const { gmailConfig, serverConfig } = require('../config/index');


function createMailOption(recipient,subject,text) {
    return {
        from: serverConfig.Gmail_Account,
        to: recipient,
        subject: subject,
        text: text
    }
}


function sendEmail(recipient,subject,text) {
    const mailOption = createMailOption(recipient,subject,text)
    gmailConfig.transporter.sendMail(mailOption,function(error,info){
        if (error) {
            console.error('❌ Error:', error.message);
          } else {
            console.log('✅ Email sent:', info.response);
          }
    })
}

module.exports = {
    sendEmail
}