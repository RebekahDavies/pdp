import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {BooksService} from '../books.service';
import {Book} from './model/book';

@Component({
  selector: 'book-list',
  templateUrl: 'books-list.component.html'
}) export class BooksListComponent {
 @Input() books: Book[];

}
