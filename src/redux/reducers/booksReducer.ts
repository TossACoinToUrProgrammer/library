import { createAction, handleActions } from "redux-actions";
import { Action, ActionTypes, IBook } from "../../types";

const initialState = {
  books: [] as IBook[],
};

type BooksState = typeof initialState;

export const addBook = createAction(ActionTypes.ADD_BOOK);

const booksReducer = handleActions(
  {
    [ActionTypes.ADD_BOOK]: (state: BooksState, { payload }: any) => {
      return {
        ...state,
        books: [...state.books, payload],
      };
    },
  },
  initialState
);

export default booksReducer;
