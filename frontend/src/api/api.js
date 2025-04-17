import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // swap this out during deployment

export const addBook = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/books`, formData);
    console.log("Book added successfully:", response);  // <-- log here
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error.response?.data || error.message);
    throw new Error("Failed to add book");
  }
};


// Fetch all books
export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch books:', error);
    throw error;
  }
};

// Fetch a book by ID
export const fetchBookById = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/books/${id}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch book:', error);
      throw error;
    }
};

// Fetch reviews for a book
export const fetchReviewsByBookId = async (bookId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/reviews?bookId=${bookId}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      throw error;
    }
};

// Existing addReview method
export const submitReview = async (reviewData) => {
  try {
    console.log("Review Data:", reviewData);
    const response = await axios.post(`${API_BASE_URL}/reviews`, {
      bookId: reviewData.bookId, 
      // userId: reviewData.user._id, 
      rating: reviewData.rating,
      comment: reviewData.comment,
    });
    console.log("Review submitted successfully:", response.data);
    return response.data; 
  } catch (err) {
    console.error('Error submitting review:', err);
    throw new Error('Failed to submit review');
  }

};

export const getUserById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/users/${id}`);
  return response.data;
};

export const updateUserById = async (id, userData) => {
  const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData);
  return response.data;
};
