import BooksDAO from "./dao/Dao"
import { IBook } from "./types"

const booksApi = new BooksDAO()

export const getBooks = async () => {
  return booksApi.getBooks()
}

export const getCategories = async () => {
  return booksApi.getCategories()
}

export const getAuthors = async () => {
  return booksApi.getAuthors()
}

export const addBook = async (book: IBook) => {
  return booksApi.addBook(book)
}

export const deleteBook = async (bookId: string) => {
  return booksApi.deleteBook(bookId)
}

export const updateBook = async (book: IBook) => {
  return booksApi.updateBook(book)
}

export const addToWishlistRequest = async (id: string) => {
  await booksApi.addToWishlist(id)
  return { status: 203 }
}
