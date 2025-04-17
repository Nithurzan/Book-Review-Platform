import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';
// Importing CSS for styling
// import 'bootstrap/dist/css/bootstrap.min.css';
// Importing custom CSS for the application
import './App.css';
import { BookProvider } from './context/BookContext';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
    <BookProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/users/:id" element={<UserProfilePage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </main>
        </div>
      </Router>
    </BookProvider>
    </AuthProvider>
    
      
  );
}

export default App;
