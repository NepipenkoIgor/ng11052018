import {Component, OnInit} from '@angular/core';
import {NonSingletonService} from '../common/services/non-singleton.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NonSingletonService]
})
export class HeaderComponent implements OnInit {
  public title = 'Ng Course';
  public logoSrc = 'assets/images/primeng.png';
  public width = 50;
  public placeholder = 'Search term';

  constructor(
    private _nonSingletonService: NonSingletonService
  ) {
  }

  ngOnInit() {
    console.log(`header => ${this._nonSingletonService.getDate()}`);
  }


}
