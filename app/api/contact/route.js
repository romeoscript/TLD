import { connectToDb } from "../../../utils/database";
import ContactModel from "../../../models/Contact";
import nodemailer from "nodemailer";

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: "theofficialxendex@xendex.com.ng",
    pass: process.env.PASS_KEY,
  },
});

export const POST = async (req) => {
  const { name, email, message } = await req.json();

  try {
    await connectToDb();
    const formData = new ContactModel({
      name,
      email,
      message,
    });
    formData.save();

    // Send email
    const mailOptions = {
      from: "theofficialxendex@xendex.com.ng",
      to: "romeobourne211@gmail.com",
      subject: `Message from ${name}, email${email}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return new Response(JSON.stringify(formData), { status: 201 });
  } catch (error) {
    return new Response("failed to work", { status: 500 });
  }
};
