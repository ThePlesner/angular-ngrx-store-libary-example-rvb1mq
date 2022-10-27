import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard.component';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [MainDashboardComponent],
  exports: [MainDashboardComponent],
})
export class MainDashboardModule {}
