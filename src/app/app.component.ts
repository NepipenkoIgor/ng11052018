import {Component, OnInit} from '@angular/core';
import {IUser, users$} from './users';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Ng Course';
  public logoSrc = 'assets/images/primeng.png';
  public width = 50;
  public placeholder = 'Search term';
  public searchTerm;

  public users: Observable<IUser[]> = users$;

  public ngOnInit(): void {
    // users$.subscribe((users: IUser[]) => {
    //   this.users = users;
    // });
  }


  public changeTitle(e: MouseEvent): void {
    console.log(e.target);
  }

  public onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
