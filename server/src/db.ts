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

// User Modle
const UserSchema = new Schema({
  username: { type: String, unique: true },
  email: String,
  password: String,
  share: Boolean,
  hash: { type: String, unique: true },
});

export const UserModel = model("User", UserSchema);

// Contend Modle
const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const ContentModel = model("Content", ContentSchema);
