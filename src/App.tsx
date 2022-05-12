import React from "react";
import { connect } from "react-redux";
import { addBook } from "./redux/reducers/booksReducer";

function App({ books, addBook }: any) {
  return (
    <div className="App">
      App
    </div>
  );
}

const mstp = (state: any) => {
  return {
    books: state.books.books,
  };
};

export default connect(mstp, { addBook })(App);
