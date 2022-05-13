import { Dispatch } from "react"
import { createAction, handleActions } from "redux-actions"

import * as requests from "../../requests"
import { ActionTypes, IAuthor, IBook, ICategory } from "../../types"
import getBooksNumberBy from "../../utils/helpers/getBooksNumberBy"

const initialState = {
  books: [] as IBook[],
  authors: [] as IAuthor[],
  categories: [] as ICategory[],
}

export type BooksState = typeof initialState

export const addBook = createAction(ActionTypes.ADD_BOOK)
export const updateBook = createAction(ActionTypes.UPDATE_BOOK)
export const deleteBook = createAction(ActionTypes.DELETE_BOOK)
const setBooks = createAction(ActionTypes.SET_BOOKS)
const setAuthors = createAction(ActionTypes.SET_AUTHORS)
const setCategories = createAction(ActionTypes.SET_CATEGORIES)

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

export const fetchBooks = () => async (dispatch: Dispatch<any>) => {
  const fetchedBooks = await requests.getBooks()
  dispatch(setBooks(fetchedBooks))
}

export default booksReducer
