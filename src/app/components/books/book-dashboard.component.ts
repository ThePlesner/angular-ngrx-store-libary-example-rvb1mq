import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'book-dashboard',
  templateUrl: './book-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDashboardComponent {}
