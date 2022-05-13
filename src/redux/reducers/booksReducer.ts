import { Dispatch } from "react"
import { createAction, handleActions } from "redux-actions"

import * as requests from "../../requests"
import { ActionTypes, IFilters, IAuthor, IBook, ICategory } from "../../types"
import getBooksNumberBy from "../../utils/helpers/getBooksNumberBy"

const initialState = {
  books: [] as IBook[],
  authors: [] as IAuthor[],
  categories: [] as ICategory[],
  filters: {
    categories: [],
    authors: [],
    sort: null,
  } as IFilters,
}

export type BooksState = typeof initialState

export const updateBook = createAction(ActionTypes.UPDATE_BOOK)
export const setFilters = createAction(ActionTypes.SET_FILTERS, (payload: IFilters) => payload)
const addBookAction = createAction(ActionTypes.ADD_BOOK)
const setBooks = createAction(ActionTypes.SET_BOOKS)
const setAuthors = createAction(ActionTypes.SET_AUTHORS)
const setCategories = createAction(ActionTypes.SET_CATEGORIES)
const toggleWishlist = createAction(ActionTypes.ADD_TO_WISHLIST)
const deleteBookAction = createAction(ActionTypes.DELETE_BOOK)

const booksReducer = handleActions(
  {
    [ActionTypes.SET_BOOKS]: (state: BooksState, { payload }: any) => {
      return {
        ...state,
        books: payload,
      }
    },
    [ActionTypes.SET_AUTHORS]: (state: BooksState, { payload }: { payload: string[] }) => {
      return {
        ...state,
        authors: payload.map((author) => ({ name: author, books: getBooksNumberBy(state.books, "authors", author) })),
      }
    },
    [ActionTypes.SET_CATEGORIES]: (state: BooksState, { payload }: { payload: string[] }) => {
      return {
        ...state,
        categories: payload.map((category) => ({
          title: category,
          books: getBooksNumberBy(state.books, "categories", category),
        })),
      }
    },
    [ActionTypes.SET_FILTERS]: (state: BooksState, { payload }: any) => {
      return {
        ...state,
        filters: payload,
      }
    },
    [ActionTypes.ADD_TO_WISHLIST]: (state: BooksState, { payload }: any) => {
      return {
        ...state,
        books: state.books.map((book) => (book.id === payload ? { ...book, isFav: !book.isFav } : book)),
      }
    },
    [ActionTypes.DELETE_BOOK]: (state: BooksState, { payload }: any) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== payload),
      }
    },
  },
  initialState
)

export const fetchInitialProps = () => async (dispatch: Dispatch<any>) => {
  const fetchedBooks = await requests.getBooks()
  dispatch(setBooks(fetchedBooks))
  const fetchedAuthors = await requests.getAuthors()
  dispatch(setAuthors(fetchedAuthors))
  const fetchedCategories = await requests.getCategories()
  dispatch(setCategories(fetchedCategories))
}

export const addToWishlist = (id: string) => async (dispatch: Dispatch<any>) => {
  const response = await requests.addToWishlistRequest(id)
  if (response.status < 400) dispatch(toggleWishlist(id))
}

export const deleteBook = (id: string) => async (dispatch: Dispatch<any>) => {
  const response = await requests.deleteBook(id)
  if (response.status < 400) dispatch(deleteBookAction(id))
}

export const addBook = (book: IBook) => async (dispatch: Dispatch<any>) => {
  const response = await requests.addBook(book)
  if (response.status < 400) dispatch(addBookAction(book))
}

export default booksReducer
