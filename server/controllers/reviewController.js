import Review from "../models/Reviews.js";

export const getReviews = async (req, res, next) => {
  try {
    const { bookId } = req.query;

    if (!bookId) {
      return res.status(400).json({ message: "Missing 'bookId' in query parameters" });
    }

    const reviews = await Review.find({ bookId });

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found for this book" });
    }

    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
    next(error);
  }
};

export const addReview = async (req, res, next) => {
  try {
    const { bookId, rating, comment } = req.body;

    if (!bookId || !comment || rating === undefined) {
      return res.status(400).json({ message: "bookId, userId, and rating are required" });
    }

    const newReview = new Review({
      bookId,
      // userId,
      rating,
      comment,
    });

    const savedReview = await newReview.save();

    res.status(201).json(savedReview);
  } catch (error) {
    console.error("Error adding review:", error.message);
    next(error);
  }
};

