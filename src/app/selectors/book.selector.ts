import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureBooksKey, FeatureBooksState } from '../reducers/books.reducer';

//Feature Selector Books

export const selectBook =
  createFeatureSelector<FeatureBooksState>(featureBooksKey);

export const getBooks = createSelector(selectBook, (state) => state.books);
