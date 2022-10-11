import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = '1228698dc44247d995eff52ac11b76fc';
  private country = 'us';

  pagesInput!: Subject<number>;
  pagesOutput!: Observable<any>;
  numberOfPages!: Observable<number>;

  constructor() {
    this.pagesInput = new Subject();
    this.pagesOutput = this.pagesInput.pipe(
      map((page: number) => {
        return new HttpParams()
          .set('apiKey', this.apiKey)
          .set('country', this.country)
          .set('pageSize', '' + this.pageSize)
          .set('page', '' + page);
      })
    );
  }
}
