import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { useBookContext } from '../context/BookContext';
import AddBookPage from './AddBookPage';

const BookListPage = () => {
  const { books, isLoadingBook, error } = useBookContext();
  const [selectedGenre, setSelectedGenre] = useState("ALL");

  // Generate genres dynamically from fetched books
  const genres = ["ALL", ...new Set(books.map(book => book.genre))];

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredBooks = selectedGenre === "ALL"
    ? books
    : books.filter(book => book.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreChange(genre)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300
              ${selectedGenre === genre ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"}
            `}
          >
            {genre}
          </button>
        ))}
      </div>

      {isLoadingBook && <p className="text-center text-gray-600">Loading books...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <AddBookPage/>
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>

      <footer className="mt-12 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Thynk Books. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BookListPage;
