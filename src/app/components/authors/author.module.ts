import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthorCreatorComponent } from './author-creator.component';
import { AuthorDisplayComponent } from './author-display.component';
import { AuthorDashboardComponent } from './author-dashboard.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { authorReducer, featureAuthorKey } from '../../reducers/author.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    StoreModule.forFeature(featureAuthorKey, authorReducer),
  ],
  declarations: [
    AuthorCreatorComponent,
    AuthorDisplayComponent,
    AuthorDashboardComponent,
  ],
  exports: [
    AuthorCreatorComponent,
    AuthorDisplayComponent,
    AuthorDashboardComponent,
  ],
})
export class AuthorModule {}
