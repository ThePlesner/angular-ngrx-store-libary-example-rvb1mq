import { createAction, props } from '@ngrx/store';
import { Author } from '../models/author.model';

export const addAuthor = createAction(
  '[Add Author] Add Author',
  props<{ author: Author }>()
);
