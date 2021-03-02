import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from './books.service';
import {Observable, Subject} from 'rxjs';
import {Book} from './books-list/model/book';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'books-layout',
  templateUrl: 'books-layout.component.html'
})
export class BooksLayoutComponent implements OnInit, OnDestroy{
  constructor(private bookService: BooksService) {
  }
  readonly destroyed$ = new Subject<void>();
  books$: Observable<Book[]>;

  ngOnInit() {
    this.books$ = this.bookService.getBooks().pipe(
      takeUntil(this.destroyed$));
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
