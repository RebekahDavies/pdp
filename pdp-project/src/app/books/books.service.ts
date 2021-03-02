import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './books-list/model/book';
import {map} from 'rxjs/operators';

@Injectable() export class BooksService {
  constructor(private httpClient: HttpClient) {
  }
  baseUrl = '/api/books';
  // create a header object which can be attached to http requests
  headers = new HttpHeaders()
    .set('content-type', 'application.json');
    // .set('Access-Control-Allow-Origin', '*');

  /**
   * Returns a list of books
   * @param headers the headers for the http get request.
   */
  getBooks(headers?: HttpHeaders): Observable<Book[]> {
    // add these headers if they don't exist in the given headers object
    if (headers) {
      if (!headers.has('content-type')) {
        headers.append('content-type', 'application.json');
      }
      // if (!headers.has('Access-Control-Allow-Origin')) {
      //   headers.append('Access-Control-Allow-Origin', '*');
      // }
    }
    const resp = this.httpClient.get(this.baseUrl, {headers: this.headers});
    return resp.pipe(
      map((res) => {
        const list: Book[] = res[0];
        for (let i = list.length; i > 0; i--) {
          const book: Book = list[i] as Book;
          list.push(book);
        }
        return list;
      })
    );
  }
}
