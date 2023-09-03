import { connectToDb } from "../../../utils/database";
import FormModel from "../../../models/FormData";
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
  const {
    name,
    email,
    phoneNumber,
    productOrService,
    budget,
    businessSize,
    virtualMeetingDate,
  } = await req.json();

  try {
    await connectToDb();
    const formData = new FormModel({
      name,
      email,
      phoneNumber,
      productOrService,
      budget,
      businessSize,
      virtualMeetingDate,
    });
    formData.save();

    // Send email
    const mailOptions = {
        from: "theofficialxendex@xendex.com.ng",
        to: "romeobourne211@gmail.com",
        subject: "New Form Submission",
        html: `
          <h1>New Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Product or Service of Interest:</strong> ${productOrService}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Business Size:</strong> ${businessSize}</p>
          <p><strong>Preferred Virtual Meeting Date:</strong> ${virtualMeetingDate}</p>
          <p>Thank you for your submission!</p>
        `,
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
