import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  description: String,
});

export default mongoose.model("Book", bookSchema);
