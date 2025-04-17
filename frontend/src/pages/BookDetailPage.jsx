import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewsPage from './ReviewsPage';
import WriteReviewPage from './WriteReviewPage';
import { useBookContext } from '../context/BookContext';
// import { useAuth } from '../context/AuthContext'

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const { currentUser } = useAuth();

  const {
    selectedBook,
    loadBookById,
    reviews,
    loadReviewsByBookId,
    addReview,
    isLoadingBook,
    isLoadingReviews,
    error,
  } = useBookContext();

  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    if (id) {
      loadBookById(id);
      loadReviewsByBookId(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // While book or reviews are loading, show a loading indicator
  if (isLoadingBook || isLoadingReviews) {
    return <div>Loading...</div>;
  }

  // Show error message if something fails
  if (error) {
    return <div>{error}</div>;
  }

  // If no book is found, show "book not found"
  if (!selectedBook) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded transition-colors duration-300"
      >
        ← Back to Books
      </button>

      {/* Review Modal */}
      {showReviewForm && (
        <WriteReviewPage
          bookId={id}
          onClose={() => setShowReviewForm(false)}
          onSubmit={addReview}
          // currentUser={currentUser}
        />
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 rounded">
            <div className="text-center p-4 text-white">
              <h2 className="text-2xl font-bold">{selectedBook.title}</h2>
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-2">{selectedBook.title}</h1>
          <p className="text-lg text-gray-700 mb-4">By: {selectedBook.author}</p>

          <div className="mb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {selectedBook.genre}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{selectedBook.description}</p>
          </div>

          <button
            onClick={() => setShowReviewForm(true)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
          >
            Write a Review
          </button>
        </div>

        {/* Pass the reviews data directly */}
        <ReviewsPage reviews={reviews} />
      </div>
    </div>
  );
};

export default BookDetailPage;
