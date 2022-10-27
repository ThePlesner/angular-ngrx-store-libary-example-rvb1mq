import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorCreatorComponent } from './components/authors/author-creator.component';
import { AuthorDashboardComponent } from './components/authors/author-dashboard.component';
import { AuthorDisplayComponent } from './components/authors/author-display.component';
import { BookCreatorComponent } from './components/books/book-creator.component';
import { BookDashboardComponent } from './components/books/book-dashboard.component';
import { BookDisplayComponent } from './components/books/book-display.component';
import { MainDashboardComponent } from './components/main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: BookDashboardComponent,
    children: [
      { path: 'create', component: BookCreatorComponent },
      {
        path: 'availablebooks',
        component: BookDisplayComponent,
      },
    ],
  },
  {
    path: 'authors',
    component: AuthorDashboardComponent,
    children: [
      {
        path: 'availableauthors',
        component: AuthorDisplayComponent,
      },
      {
        path: 'create',
        component: AuthorCreatorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
