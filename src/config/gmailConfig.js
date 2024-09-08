const nodemailer = require('nodemailer');

const { Gmail_Account, Gmail_Pass} = require('../config/serverConfig');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: Gmail_Account,
        pass: Gmail_Pass
    }
})

module.exports = { transporter };