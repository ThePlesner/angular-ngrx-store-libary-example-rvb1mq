import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { getBooks } from '../../selectors/book.selector';
import { AppState } from '../../state.model';

@Component({
  selector: 'book-display',
  templateUrl: './book-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDisplayComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.books$ = this.store.pipe(select(getBooks));
  }
}
