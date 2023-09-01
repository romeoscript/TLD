// models/FormData.js
import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  productOrService: String,
  budget: String,
  businessSize: String,
  virtualMeetingDate: String,
});

const FormModel =
  mongoose.models.FormData || mongoose.model("FormData", formDataSchema);

export default FormModel;
