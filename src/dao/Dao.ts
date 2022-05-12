import { IBook } from "../types";
import mockBooks from "./mock-data/books.json";

class BooksDAO {
  books = [] as IBook[];
  constructor() {
    let books = JSON.parse(localStorage.getItem("books") as any);
    if (!books) {
      localStorage.setItem("books", JSON.stringify(mockBooks));
      books = mockBooks;
    }
    this.books = books;
  }

  private _updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  getBooks(): IBook[] {
    return this.books;
  }

  addBook(book: IBook) {
    this.books.push(book);
    this._updateLocalStorage();
  }

  deleteBook(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
    this._updateLocalStorage();
  }

  updateBook(book: IBook) {
    this.books.map((item) => (item.id === book.id ? book : item));
    this._updateLocalStorage();
  }
}

export default BooksDAO;
