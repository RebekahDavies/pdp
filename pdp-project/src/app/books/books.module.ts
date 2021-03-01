import {NgModule} from '@angular/core';
import {BooksLayoutComponent} from './books-layout.component';
import {BooksListComponent} from './books-list/books-list.component';

const components = [
  BooksLayoutComponent,
  BooksListComponent
];

@NgModule({
  imports: [],
  declarations: [components],
  exports: []
})
export class BooksModule{}
