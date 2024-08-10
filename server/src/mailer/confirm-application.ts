import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendConfirmApplication(companyEmail: string) {
  try {
    return await transporter.sendMail({
      from: 'janis.hand50@ethereal.email',
      to: companyEmail,
      subject: 'Application',
      html: '<b>A new job application has been received.</b>',
    });
  } catch (error) {
    throw new Error('Failed to send confirmation email.');
  }
}
