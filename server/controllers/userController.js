import User from "../models/User.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    // Optional: basic validation before updating
    if (!name && !email && !req.body.avatar) {
      return res.status(400).json({ message: "At least one field (name, email, avatar) must be provided" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error.message);
    next(error);
  }
};
