import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'author-dashboard',
  templateUrl: './author-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorDashboardComponent {}
