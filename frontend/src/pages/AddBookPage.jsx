import React, { useState } from 'react';
import { addBook } from '../api/api';
import { useBookContext } from '../context/BookContext';

const AddBookPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: ''
  });
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const { loadBooks } = useBookContext();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    try {
      await addBook(formData);
      await loadBooks();
      setIsOpen(false);
      setFormData({ title: '', author: '', genre: '', description: '' });
      
    } catch (err) {
      setError("Failed to add book.");
    }
  };

  return (
    <div 
      className="relative bg-[#f0f0f0] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-center items-center p-4"
      style={{ minHeight: "300px", width: "100%" }}
    >
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-500 font-bold text-xl border border-dotted p-4 rounded"
      >
        + Add Book
      </button>

      {/* Popover */}
      {isOpen && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-full transition-transform transform scale-100">
            <h3 className="text-lg font-semibold mb-2">Add New Book</h3>
            
            {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="p-2 border rounded text-sm"
                required
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                className="p-2 border rounded text-sm"
                required
              />
              <input
                type="text"
                name="genre"
                placeholder="Genre"
                value={formData.genre}
                onChange={handleChange}
                className="p-2 border rounded text-sm"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="p-2 border rounded text-sm resize-none h-20"
                required
              />
              <div className="flex gap-3 mt-2">
                <button
                  type="submit"
                  className="flex-1 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2 bg-gray-300 text-gray-800 rounded text-sm hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBookPage;
