import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  security: false,
  auth: {
    user: 'janis.hand50@ethereal.email',
    pass: 'dByRb23DZ2KUp2JDgS',
  },
});

export async function sendConfirmApplication(receiver) {
  try {
    console.log('receiver.userEmail', receiver.userEmail);

    return await transporter.sendMail({
      from: 'janis.hand50@ethereal.email',
      to: receiver.userEmail,
      subject: 'Application',
      html: '<b>Your application has been successfully submitted.</b>',
    });
  } catch (error) {
    throw new Error(`Failed to send confirmation email. Error: ${error}`);
  }
}
