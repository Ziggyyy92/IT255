import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cat } from '../models/cat';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private baseUrl = 'http://localhost:4000/api/translations/all';

  constructor(private _httpClient: HttpClient) { }

  public getCats(): Observable<Cat[]> {
    return this._httpClient.get(this.baseUrl).pipe(
      map((data: any) => data.map((item: any) => this._createCatFromObject(item))),
    );
  }

  private _createCatFromObject(item: any): Cat | undefined {
    if(item.user) {
      let user = new User(item.user._id, item.user.name.first, item.user.name.last);
      return new Cat(item._id, item.text, item.type, item.upvotes, user, item.userUpvoted);
    }
    return ;
  }
}
