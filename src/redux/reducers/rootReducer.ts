import { combineReducers } from "redux"
import booksReducer, { BooksState } from "./booksReducer"

export const rootReducer = combineReducers({
  books: booksReducer,
})

export type State = {
  books: BooksState
}
