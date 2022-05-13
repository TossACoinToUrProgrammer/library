export interface IAuthor {
  name: string
  books: number
}

export interface ICategory {
  title: string
  books: number
}

export interface IBook {
  id: string
  title: string
  authors: string[]
  categories: string[]
  thumbnailUrl: string
  pageCount: number
  shortDescription?: string
  longDescription?: string
  isFav?: boolean
}

export interface IFilters {
  categories: string[]
  authors: string[]
  sort: 1 | -1 | null
}

export enum ActionTypes {
  ADD_BOOK = "ADD_BOOK",
  ADD_TO_WISHLIST = "ADD_TO_WISHLIST",
  UPDATE_BOOK = "UPDATE_BOOK",
  DELETE_BOOK = "DELETE_BOOK",
  FETCH_BOOKS = "FETCH_BOOKS",
  SET_BOOKS = "SET_BOOKS",
  SET_AUTHORS = "SET_AUTHORS",
  SET_CATEGORIES = "SET_CATEGORIES",
  SET_FILTERS = "SET_FILTERS",
}

//ActionType(AT)
interface AddBookAT {
  type: ActionTypes.ADD_BOOK
  payload: IBook
}

interface UpdateBookAT {
  type: ActionTypes.UPDATE_BOOK
  payload: IBook
}

interface DeleteBookAT {
  type: ActionTypes.DELETE_BOOK
  payload: string
}

export type Action = AddBookAT | UpdateBookAT | DeleteBookAT
