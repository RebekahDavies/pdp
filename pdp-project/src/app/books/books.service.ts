import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './books-list/model/book';
import {map} from 'rxjs/operators';
import {isArray} from 'rxjs/internal-compatibility';
import { ToastrService } from 'ngx-toastr';

@Injectable() export class BooksService {
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
  }
  baseUrl = '/api/books';
  // create a header object which can be attached to http requests
  headers = new HttpHeaders()
    .set('content-type', 'application.json')
    .set('Access-Control-Allow-Origin', '*');

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
      if (!headers.has('Access-Control-Allow-Origin')) {
        headers.append('Access-Control-Allow-Origin', '*');
      }
    }
    const resp = this.httpClient.get(this.baseUrl, {headers: this.headers, observe: 'response'});
    return resp.pipe(
      map((res ) => {
        if(res.status === 200) {
          const list: Book[] = [];
          if (isArray(res.body)) {
            for (let i = 0; i < res.body.length; i++) {
              const book: Book = res.body[i] as Book;
              list.push(book);
            }
          } else {
            list.push(res.body as Book);
          }
          return list;
          this.toastr.success('Success!');
        }
        else {
          console.log('booooooo');
          this.toastr.error('Boo!' + res.statusText, res.status.toString());
        }
      })
    );
  }
}
