import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongodb is connected");
    return;
  }
  try {
    await mongoose.connect(process.env.M0NGODB_URI, {
      dbName: "quotes",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("mongodb is connnected");
  } catch (error) {
    console.log(error);
  }
};
