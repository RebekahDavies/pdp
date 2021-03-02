import {NgModule} from '@angular/core';
import {BooksLayoutComponent} from './books-layout.component';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksService} from './books.service';
import {CommonModule} from '@angular/common';

const components = [
  BooksLayoutComponent,
  BooksListComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [components],
  providers: [BooksService],
  exports: []
})
export class BooksModule{}
