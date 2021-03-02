import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {BooksService} from '../books.service';

@Component({
  selector: 'book-list',
  templateUrl: 'books-list.component.html'
}) export class BooksListComponent implements OnDestroy, OnInit {
  constructor(private bookService: BooksService) {
  }
  readonly destroyed$ = new Subject<void>();
  private readonly books$ = this.bookService.getBooks();


  ngOnInit() {
    this.books$.subscribe(console.log);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
