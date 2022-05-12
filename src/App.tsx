import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { BooksPage } from "./pages/BooksPage";

import { addBook, fetchBooks } from "./redux/reducers/booksReducer";

function App({ books, addBook, fetchBooks }: any) {

  useEffect(() => {
    if (!books || !books.length) fetchBooks();
  }, [books, fetchBooks]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </div>
  );
}

const mstp = (state: any) => {
  return {
    books: state.books.books,
  };
};

export default connect(mstp, { addBook, fetchBooks })(App);
