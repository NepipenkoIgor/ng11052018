import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NonSingletonService} from '../../../common/services/non-singleton.service';
import {IUser} from '../../../common/services/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {

  @Input()
  public user: IUser;

  @Input()
  public position: number;

  @Input()
  public isOdd: boolean;

  constructor(
    private _nonSingletonService: NonSingletonService
  ) { }

  ngOnInit() {
    console.log(`card => ${this._nonSingletonService.getDate()}`);
  }

}
