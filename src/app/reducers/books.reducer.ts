import { createReducer, on } from '@ngrx/store';

import { addBook } from '../actions/book.actions';
import { Book } from '../models/book.model';

export const featureBooksKey = 'featureBooks';

//Feature state for the avaiable books piece
export interface FeatureBooksState {
  books: Book[];
}

//Initial state for the reducer. The state piece in this example is just a string so the initial state will
//also be a string.
export const initialAvailableBookState: FeatureBooksState = {
  books: [],
};

//Reducer that uses the initial available books state.
//If the action addBook is dispatched the reducer will change the state of text to the new text (by just returning the text variable)
//If the action deleteText is dispatched the reducer will change the state of text to empty (by returning the empty string)
export const bookReducer = createReducer(
  initialAvailableBookState,
  on(addBook, (state, { book }) => ({
    ...state,
    books: state.books.concat(book),
  }))
);
