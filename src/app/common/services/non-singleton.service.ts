import {Injectable} from '@angular/core';

@Injectable()
export class NonSingletonService {

  private _date = Date.now();


  public getDate(): number {
    return this._date;
  }
}
