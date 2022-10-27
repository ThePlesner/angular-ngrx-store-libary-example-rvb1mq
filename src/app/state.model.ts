//The Application state interface. This defines the state of the application.
//The application state can be expanded if other pieces of state is needed in the application.

import { Author } from './models/author.model';
import { Book } from './models/book.model';

//In this simple example we only have a single piece of state which is just a text of type string.
export interface AppState {
  featureLibrary: {
    books: Book[];
  };
  featureBooks: {
    books: Book[];
  };
  featureAuthors: {
    authors: Author[];
  };
}
