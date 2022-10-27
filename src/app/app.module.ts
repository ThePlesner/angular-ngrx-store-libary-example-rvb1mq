import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { bookReducer } from './reducers/books.reducer';
import { BookModule } from './components/books/book.module';
import { CommonModule } from '@angular/common';
import { AuthorModule } from './components/authors/author.module';
import { authorReducer } from './reducers/author.reducer';
import { AppRoutingModule } from './app-routing.module';
import { MainDashboardModule } from './components/main-dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    BookModule,
    AuthorModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    MainDashboardModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
