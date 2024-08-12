// pages/api/contact.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `<p>You have a new contact form submission</p><p><strong>Name: </strong> ${name}</p><p><strong>Email: </strong> ${email}</p><p><strong>Message: </strong> ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      if (res && res.status) {
        res.status(500).json({ message: 'Error sending message' });
      } else {
        console.error('Response object is not available');
      }
    }
    
  }
};

export default handler;
