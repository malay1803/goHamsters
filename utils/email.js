
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const htmlToText = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.Email;
    this.firstName = user.Username.split(' ')[0];
    this.url = url;
    this.from = `GoHamsters <gohamstersconnect@gmail.com>`;
  }

  newTransport() {
      // Sendgrid
      return nodemailer.createTransport({
        service: 'SendinBlue',
        auth: {
          user: "gohamstersconnect@gmail.com",
          pass: "gj2Esn0vQ1kaCGRh"
        }
      });
  }

  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a ejs template
    const html = await ejs.renderFile(`${__dirname}/../views/email/baseEmail.ejs`, {
      firstName: this.firstName,
      url: this.url,
      subject,
      template
    });
    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html)
    };

    // 3) Create a transport and send email
    const ma=await this.newTransport().sendMail(mailOptions);
    console.log(ma);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Hamsters Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)'
    );
  }
};
