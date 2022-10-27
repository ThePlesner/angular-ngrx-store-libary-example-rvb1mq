import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Author } from '../../models/author.model';
import { getAuthors } from '../../selectors/author.selector';
import { AppState } from '../../state.model';

@Component({
  selector: 'author-display',
  templateUrl: './author-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorDisplayComponent implements OnInit {
  authors$: Observable<Author[]>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.authors$ = this.store.pipe(select(getAuthors));
  }
}
