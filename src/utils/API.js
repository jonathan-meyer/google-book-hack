import axios from "axios";

export default {
  // Gets books from the Google API minus saved books
  getBooks: q => axios.get("/api/google", { params: { q: `title:${q}` } }),

  // Gets all saved books
  getSavedBooks: () => axios.get("/api/books"),

  // Deletes the saved book with the given id
  deleteBook: id => axios.delete(`/api/books/${id}`),

  // Saves a book to the database
  saveBook: bookData => axios.post("/api/books", bookData)
};
