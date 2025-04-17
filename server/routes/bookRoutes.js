import express from "express";
import {
  getBooks,
  getBookById,
  addBook
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", addBook); // assuming admin only for now

export default router;
