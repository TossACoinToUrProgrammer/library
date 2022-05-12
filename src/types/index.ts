export interface IBook {
  id: string;
  title: string;
  authors: string[];
  categories: string[];
  thumbnailUrl: string;
  pageCount: number;
  shortDescription?: string;
  longDescription?: string;
}

export enum ActionTypes {
  ADD_BOOK = "ADD_BOOK",
  UPDATE_BOOK = "UPDATE_BOOK",
  DELETE_BOOK = "DELETE_BOOK",
  FETCH_BOOKS = "FETCH_BOOKS",
  SET_BOOKS = "SET_BOOKS",
}

//ActionType(AT)
interface AddBookAT {
  type: ActionTypes.ADD_BOOK;
  payload: IBook;
}

interface UpdateBookAT {
  type: ActionTypes.UPDATE_BOOK;
  payload: IBook;
}

interface DeleteBookAT {
  type: ActionTypes.DELETE_BOOK;
  payload: string;
}

export type Action = AddBookAT | UpdateBookAT | DeleteBookAT;
