// models/FormData.js
import mongoose from "mongoose";

const ContactModelSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,

});

const ContactModel =
  mongoose.models.ContactModel || mongoose.model("ContactModel", ContactModelSchema);

export default ContactModel;
