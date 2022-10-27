import { createReducer, on } from '@ngrx/store';
import { addAuthor } from '../actions/author.actions';

import { Author } from '../models/author.model';

export const featureAuthorKey = 'featureAuthors';

//Feature state for the avaiable authors piece
export interface FeatureAuthorsState {
  authors: Author[];
}

//Initial state for the reducer. The state piece in this example is just a string so the initial state will
//also be a string.
export const initialFeaturedAuthorsState: FeatureAuthorsState = {
  authors: [],
};

//Reducer that uses the initial text state.
//If the action editText is dispatched the reducer will change the state of text to the new text (by just returning the text variable)
//If the action deleteText is dispatched the reducer will change the state of text to empty (by returning the empty string)
export const authorReducer = createReducer(
  initialFeaturedAuthorsState,
  on(addAuthor, (state, { author }) => ({
    ...state,
    authors: state.authors.concat(author),
  }))
);
