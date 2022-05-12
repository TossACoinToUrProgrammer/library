import { Dispatch } from "react";
import { createAction, handleActions } from "redux-actions";

import * as requests from "../../requests";
import { ActionTypes, IBook } from "../../types";

const initialState = {
  books: [] as IBook[],
};

type BooksState = typeof initialState;

export const addBook = createAction(ActionTypes.ADD_BOOK);
export const updateBook = createAction(ActionTypes.UPDATE_BOOK);
export const deleteBook = createAction(ActionTypes.DELETE_BOOK);
const setBooks = createAction(ActionTypes.SET_BOOKS);

const booksReducer = handleActions(
  {
    [ActionTypes.SET_BOOKS]: (state: BooksState, { payload }: any) => {
      return {
        ...state,
        books: payload,
      };
    },
  },
  initialState
);

export const fetchBooks = () => async (dispatch: Dispatch<any>) => {
  const fetchedBooks = await requests.getBooks();
  dispatch(setBooks(fetchedBooks));
};

export default booksReducer;
