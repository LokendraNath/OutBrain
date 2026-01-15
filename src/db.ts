import mongoose, { model, Schema } from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI!;
    await mongoose.connect(uri);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Connection Failed", error);
    process.exit(1);
  }
};

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const UserModle = model("User", UserSchema);
