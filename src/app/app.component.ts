import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state.model';
import { getBooks } from './selectors/book.selector';
import { Book } from './models/book.model';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books$ = this.store.pipe(select(getBooks));
  }
}
