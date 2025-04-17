// routes/authRoutes.js
import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, isAdmin } = req.body;
  const user = new User({ name, email, isAdmin });
  await user.save();

  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "your_jwt_secret");
  res.json({ token });
});

router.post("/login", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "your_jwt_secret");
  res.json({ token });
});

export default router;
