import Book from "../models/Books.js";

export const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    if (!books || books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }
    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error.message);
    next(error);
  }
};

import mongoose from "mongoose";

export const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID format" });
    }

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    next(error);
  }
};


export const addBook = async (req, res, next) => {
  try {
    const { title, author, genre } = req.body;
    if (!title || !author || !genre) {
      return res.status(400).json({ message: "Title, author, and genre are required" });
    }

    const newBook = new Book(req.body);
    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    console.error("Error adding book:", error.message);
    next(error);
  }
};
