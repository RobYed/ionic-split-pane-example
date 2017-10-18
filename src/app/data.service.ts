import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Category, CategoryEntry } from '../model';

@Injectable()
export class DataService {

  constructor() {}

  getCategories(): Observable<Category[]> {
    return Observable.of([{
      id: "1",
      title: "Things",
      comment: "this is a text",
      dateCreated: new Date()
    }]);
  }

  getCategory(categoryId: string): Observable<Category> {
    return Observable.of({
      id: "1",
      title: "Things",
      comment: "this is a text",
      dateCreated: new Date()
    });
  }

  getEntries(categoryId: string): Observable<CategoryEntry[]> {
    return Observable.of([{
      id: "123",
      category: "1",
      startedBy: "author",
      dateStarted: new Date()
    }]);
  }

  getEntry(entryId: string): Observable<CategoryEntry> {
    return Observable.of({
      id: "123",
      category: "1",
      startedBy: "author",
      dateStarted: new Date()
    });
  }
}