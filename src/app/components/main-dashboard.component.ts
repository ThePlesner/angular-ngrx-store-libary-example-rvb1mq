import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'main-dashboard',
  templateUrl: './main-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDashboardComponent {}
