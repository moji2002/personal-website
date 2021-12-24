const nodemailer = require("nodemailer");

const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD, EMAIL_TO } = process.env;

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

const sendEmail = async ({ name, email, content }) => {
  console.log({ EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD, EMAIL_TO });

  try {
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: ` ${name} send you a message`,
      text: `You have a new message from ${name} with email Address of ${email}

${content}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info);
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
