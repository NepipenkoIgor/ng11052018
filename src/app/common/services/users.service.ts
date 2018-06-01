import {Observable} from 'rxjs';
import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../../config';

export interface IUser {
  profileName: string;
  firstName: string;
  surname: string;
  photo?: string;
  country: string;
}

@Injectable()
export class UsersService {

  public constructor(
    private _http: HttpClient,
    @Inject(BASE_URL) private _baseUrl: string,
    @Optional() @Inject('optional') private _optional: string
    ) {

  }

  public getUsers(): Observable<IUser[]> {
    return this._http
      .get<IUser[]>(`${this._baseUrl}/participants?key=ovxw4e`);
  }
}
