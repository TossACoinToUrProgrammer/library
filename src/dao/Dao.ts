import { IBook } from "../types"
import mockBooks from "./mock-data/books.json"
import mockAuthors from "./mock-data/authors.json"
import mockCategories from "./mock-data/categories.json"

class BooksDAO {
  books = [] as IBook[]
  authors = [] as string[]
  categories = [] as string[]

  constructor() {
    let books = JSON.parse(localStorage.getItem("books") as any)
    if (!books) {
      localStorage.setItem("books", JSON.stringify(mockBooks))
      books = mockBooks
    }
    this.books = books
    this.authors = mockAuthors
    this.categories = mockCategories
  }

  private _updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(this.books))
  }

  getBooks(): IBook[] {
    return this.books
  }

  getAuthors(): string[] {
    return this.authors
  }

  getCategories(): string[] {
    return this.categories
  }

  addBook(book: IBook) {
    this.books.push(book)
    this._updateLocalStorage()
  }

  deleteBook(id: string) {
    this.books = this.books.filter((book) => book.id !== id)
    this._updateLocalStorage()
  }

  updateBook(book: IBook) {
    this.books.map((item) => (item.id === book.id ? book : item))
    this._updateLocalStorage()
  }
}

export default BooksDAO
