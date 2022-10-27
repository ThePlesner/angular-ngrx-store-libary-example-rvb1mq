import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BookDisplayComponent } from './book-display.component';
import { BookCreatorComponent } from './book-creator.component';
import { CommonModule } from '@angular/common';
import { BookDashboardComponent } from './book-dashboard.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { bookReducer, featureBooksKey } from '../../reducers/books.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    StoreModule.forFeature(featureBooksKey, bookReducer),
  ],
  declarations: [
    BookDisplayComponent,
    BookCreatorComponent,
    BookDashboardComponent,
  ],
  exports: [BookDisplayComponent, BookCreatorComponent, BookDashboardComponent],
})
export class BookModule {}
