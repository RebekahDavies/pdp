import {NgModule} from '@angular/core';
import {BooksLayoutComponent} from './books-layout.component';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksService} from './books.service';
import {CommonModule} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

const components = [
  BooksLayoutComponent,
  BooksListComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [components],
  providers: [BooksService,ToastrService],
  exports: []
})
export class BooksModule{}
