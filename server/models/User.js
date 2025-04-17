import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  isAdmin: { type: Boolean, default: false }
});

export default mongoose.model("User", userSchema);

