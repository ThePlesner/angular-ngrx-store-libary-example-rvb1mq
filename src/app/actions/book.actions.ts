import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book.model';

export const addBook = createAction(
  '[Add Book] Add Book',
  props<{ book: Book }>()
);
