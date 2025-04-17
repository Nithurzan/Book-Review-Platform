# Book-Review-Platform


# 📚 Book Review Platform

A full-stack book review platform where users can browse books, read and write reviews, and manage their profiles. Built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 📌 Features

- Browse a list of books with search and filter functionality
- View detailed information and reviews for each book
- Submit reviews and rate books
- Manage user profiles (view and update profile info)
- Admin-only feature to add new books (optional)
- Responsive, modern UI
- RESTful API with error handling and validation
- State management using **React Context**

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router, React Context, Axios
- **Backend:** Node.js, Express, Mongoose (MongoDB)
- **Database:** MongoDB
- **Other Tools:** Joi (validation), CORS, dotenv

---

## 📁 Project Structure

```
/frontend       # React frontend
/server         # Node.js + Express backend
```

### 📂 Client (React)
```
/src
  /components    # React components
  /contexts      # React Context files (BookContext, UserContext)
  /api           # API calls (api.js)
  /pages         # Page components (Home, Book Listing, Book Details, Profile)
  App.jsx         # Route setup

```

### 📂 Server (Node.js + Express)
```
/controllers     # API logic (book, review, user)
 /models          # Mongoose models
 /routes          # Route definitions
 /config          # Database connection config
 server.js        # Main Express app
```

---

## 🚀 Installation & Running Locally

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Nithurzan/book-review-platform.git
cd book-review-platform
```

### 2️⃣ Backend Setup  
```bash
cd server
npm install
npm run dev
```
- Create a `.env` file in `/server` with:
  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  ```

### 3️⃣ Frontend Setup  
```bash
cd client
npm install
npm start
```
- Runs on `http://localhost:3000`

---

## 🌐 API Endpoints

### 📚 Books
- `GET /books` — Retrieve all books
- `GET /books/:id` — Retrieve a specific book
- `POST /books` — Add a new book (admin only)

### 📝 Reviews
- `GET /reviews?bookId=` — Get reviews for a book
- `POST /reviews` — Submit a new review

### 👤 Users
- `GET /users/:id` — Retrieve user profile
- `PUT /users/:id` — Update user profile

---

## 🎨 Screenshots

_(Add screenshots of your UI here if possible — optional)_

---

## 📖 Documentation

- **React Context** is used for state management (books, reviews, and user info)
- **React Router** manages navigation between pages
- **Axios** is used for API integration
- **Mongoose** handles MongoDB schemas and data validation
- **Express** defines RESTful API endpoints
- **Error handling** implemented in both frontend and backend
- **Loading states** and **error messages** are displayed in UI

---

## ✅ Requirements Covered

✔️ React frontend with required pages and state management  
✔️ RESTful API with specified endpoints  
✔️ MongoDB data persistence with schema validation  
✔️ Error handling and edge case management  
✔️ Clean, responsive UI/UX  
✔️ Complete README with setup instructions  

---

## 📌 License

This project is for educational and assignment purposes only.


