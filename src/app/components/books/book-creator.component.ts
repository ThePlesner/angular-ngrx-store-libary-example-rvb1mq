import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addBook } from '../../actions/book.actions';
import { Author } from '../../models/author.model';
import { getAuthors } from '../../selectors/author.selector';
import { AppState } from '../../state.model';

@Component({
  selector: 'book-creator',
  templateUrl: './book-creator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCreatorComponent implements OnInit {
  authors$: Observable<Author[]>;

  bookTitle: string;

  selectedAuthor: Author;

  constructor(private readonly store: Store<AppState>) {}

  public ngOnInit(): void {
    this.authors$ = this.store.pipe(select(getAuthors));
  }

  public createBook(title: string, author: Author) {
    this.store.dispatch(
      addBook({
        book: {
          title,
          author,
        },
      })
    );
  }
}
