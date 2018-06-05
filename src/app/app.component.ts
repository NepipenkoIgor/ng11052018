import {Component, OnInit} from '@angular/core';

import {Observable, range} from 'rxjs';
import {IUser, UsersService} from './common/services/users.service';
import {filter, map, observeOn} from 'rxjs/internal/operators';
import {asap} from 'rxjs/internal/scheduler/asap';

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


    // const sequence$ = fromEvent(window, 'click');


    // const sequence$ = new Observable((observer: Observer<number>) => {
    //   let count = 0;
    //   setInterval(() => {
    //     console.log('data');
    //     observer.next(count++);
    //
    //   }, 1000);
    // });
    //
    //
    // sequence$.subscribe((e: Event) => {
    //   console.log(`Source 1 => ${(e as MouseEvent).clientX}`);
    // });
    //
    //
    // setTimeout(() => {
    //   sequence$.subscribe((e: Event) => {
    //     console.log(`Source 2 => ${(e as MouseEvent).clientX}`);
    //   });
    // }, 5000);


    // const sequence$$ = new ReplaySubject(2);
    //
    //
    // sequence$$.next(1);
    // sequence$$.next(2);
    // sequence$$.next(3);
    // sequence$$.subscribe((value: number) => {
    //   console.log(`Source 2 => ${value}`);
    // });
    // sequence$$.subscribe((value: number) => {
    //   console.log(value);
    // });

    // sequence$$.next(4);
    // sequence$$.next(5);
    // sequence$$.next(6);
    //
    // const subscription = sequence$$.subscribe((value: number) => {
    //   console.log(`Source 1 => ${value}`);
    // });
    // sequence$$.next(7);
    //
    // subscription.unsubscribe();


    // const arr = [];
    // for (let i = 0; i < 1000; i++) {
    //   arr.push(i);
    // }

    // const sequence$ = from(arr, asap);
    //
    // console.log('start');
    //
    // setTimeout(() => {
    //   console.log('timeout');
    // }, 0);
    //
    // Promise.resolve().then(() => console.log('promise'));
    // )
    // console.time('Sequence');
    // sequence$.subscribe(() => {
    // }, () => {
    // }, () => {
    //   console.timeEnd('Sequence');
    // });
    // console.log('end');

    console.log('start');
    const sequence$ = range(1, 10000);
    console.time('Sequence');
    sequence$.pipe(
      filter((value: number) => value % 2 === 0),
      observeOn(asap),
      map((value: number) => value ** 2 / 4)
    ).subscribe(() => {
    }, () => {
    }, () => {
      console.timeEnd('Sequence');
    });
    console.log('end');
  }


  public changeTitle(e: MouseEvent): void {
    console.log(e.target);
  }

  public onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
