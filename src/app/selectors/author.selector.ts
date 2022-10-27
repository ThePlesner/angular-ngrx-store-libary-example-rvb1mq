import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FeatureAuthorsState,
  featureAuthorKey,
} from '../reducers/author.reducer';

//Temporary selector, TODO feature selector

export const selectAuthors =
  createFeatureSelector<FeatureAuthorsState>(featureAuthorKey);

export const getAuthors = createSelector(
  selectAuthors,
  (state) => state.authors
);
