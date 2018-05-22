import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi Angular';

  public someArr = [1, 2, 3];

  private _rate = 2000;

  public getMoney(): number {
    return Math.round(this._rate * 2.14);
  }
}
