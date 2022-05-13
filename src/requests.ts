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
  await booksApi.addBook(book)
  return { status: 203 }
}

export const deleteBook = async (bookId: string) => {
  await booksApi.deleteBook(bookId)
  return { status: 203 }
}

export const updateBook = async (book: IBook) => {
  await booksApi.updateBook(book)
  return { status: 203 }
}

export const addToWishlistRequest = async (id: string) => {
  await booksApi.addToWishlist(id)
  return { status: 203 }
}
