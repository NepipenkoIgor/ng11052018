import {Injectable} from '@angular/core';
import {Resolve, Router} from '@angular/router';
import {IUser, UsersService} from '../../common/services/users.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';

@Injectable()
export class UserResolveService implements Resolve<IUser> {

  constructor(
    private _usersService: UsersService,
    private _router: Router
  ) {
  }


  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser | null> {
    return this._usersService.getUsers()
      .pipe(map((users: IUser[]) => {
          const currentUser = users.find((user: IUser) => route.params.userId === user.id.toString());
          if (!currentUser) {
            return Observable.throw('no user');
          }
          return currentUser;
        }),
        catchError((err: string) => {
          this._router.navigate(['users']);
          return of('null');
        })
      );

  }

}
