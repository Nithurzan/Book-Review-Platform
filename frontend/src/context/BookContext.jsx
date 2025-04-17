import { createContext, useState, useEffect, useContext } from "react";
import { fetchBookById, fetchBooks, fetchReviewsByBookId, submitReview } from "../api/api";

const BookContext = createContext();

// Custom hook to use BookContext
export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [isLoadingBook, setIsLoadingBook] = useState(false); // Separate loading for book
    const [isLoadingReviews, setIsLoadingReviews] = useState(false); // Separate loading for reviews
    const [selectedBook, setSelectedBook] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

  // Fetch all books
  const loadBooks = async () => {
    setIsLoadingBook(true);
    try {
      const data = await fetchBooks();
      setBooks(data);
      setError('');
    } catch (err) {
      setError('Failed to load books');
    } finally {
        setIsLoadingBook(false);
    }
  };

 // Fetch a book by ID
 const loadBookById = async (id) => {
    setIsLoadingBook(true);
    try {
      const data = await fetchBookById(id);
      setSelectedBook(data);
      setError('');
    } catch (err) {
      setError('Failed to load book details');
    } finally {
      setIsLoadingBook(false);
    }
  };

  // Fetch reviews by book ID
  const loadReviewsByBookId = async (bookId) => {
    setIsLoadingReviews(true);
    try {
      const data = await fetchReviewsByBookId(bookId);
      setReviews(data);
      setError('');
    } catch (err) {
      setError('Failed to load reviews');
    } finally {
      setIsLoadingReviews(false);
    }
  };

  // Submit a new review
  const addReview = async (reviewData) => {
    try {
      await submitReview(reviewData);
      loadReviewsByBookId(reviewData.bookId);
    } catch (err) {
      setError('Failed to submit review');
    }
  };

  // Fetch all books on mount
  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{
        books,
        isLoadingBook,
        isLoadingReviews,
        error,
        selectedBook,
        loadBookById,
        loadBooks,
        reviews,
        addReview,
        loadReviewsByBookId,
        setReviews, // This will allow you to add new reviews as well
      }}
    >
      {children}
    </BookContext.Provider>
  );
};