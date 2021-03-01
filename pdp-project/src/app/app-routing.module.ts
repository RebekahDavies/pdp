import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksLayoutComponent} from './books/books-layout.component';

const routes: Routes = [
  { path: 'books', component: BooksLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
