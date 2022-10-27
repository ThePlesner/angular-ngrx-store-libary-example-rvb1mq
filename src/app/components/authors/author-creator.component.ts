import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { addAuthor } from '../../actions/author.actions';
import { AppState } from '../../state.model';

@Component({
  selector: 'author-creator',
  templateUrl: './author-creator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorCreatorComponent {
  authorName: string;

  constructor(private readonly store: Store<AppState>) {}

  public createAuthor(authorName: string) {
    this.store.dispatch(
      addAuthor({
        author: {
          name: authorName,
        },
      })
    );
  }
}
