import {Component, Inject, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {IUser, UsersService} from './common/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'Ng Course';
  public logoSrc = 'assets/images/primeng.png';
  public width = 50;
  public placeholder = 'Search term';
  public searchTerm;

  public users: Observable<IUser[]>;

  public constructor(private  _usersService: UsersService) {

  }

  public ngOnInit(): void {
    this.users = this._usersService.getUsers();
  }


  public changeTitle(e: MouseEvent): void {
    console.log(e.target);
  }

  public onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
