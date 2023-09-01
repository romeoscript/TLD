import { connectToDb } from "../../../utils/database";
import FormModel from "../../../models/FormData";
import nodemailer from "nodemailer";

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  host: "smpt.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: "theofficialxendex@xendex.com.ng",
    pass: "MH65Fu9GgDSA",
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
      text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n${productOrService}\n${productOrService}\n${budget}\n${businessSize}\n${virtualMeetingDate}`, // Include other form data
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
