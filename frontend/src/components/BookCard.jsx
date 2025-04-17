import React from 'react'
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
    const navigate = useNavigate()
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
            <h3 className="text-xl font-bold text-white text-center leading-tight">{book.title}</h3>
          </div>
    
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-2">By: {book.author}</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
              {book.genre}
            </span>
    
            <button 
              onClick={() => navigate(`/book/${book._id}`)}
              className="block w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
            >
              Show Description
            </button>
          </div>
        </div>
      );
}

export default BookCard
