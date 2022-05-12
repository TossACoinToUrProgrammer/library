import BooksDAO from "./dao/Dao";
import { IBook } from "./types";

const booksApi = new BooksDAO();

export const getBooks = async () => {
  return booksApi.getBooks();
};

export const addBook = async (book: IBook) => {
  return booksApi.addBook(book);
};

export const deleteBook = async (bookId: string) => {
  return booksApi.deleteBook(bookId);
};

export const updateBook = async (book: IBook) => {
  return booksApi.updateBook(book);
};
