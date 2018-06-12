import {Route} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UsersListComponent} from './users/users-list/users-list.component';
import {UserComponent} from './users/user/user.component';
import {UserResolveService} from './users/user/user-resolve.service';


export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent
      },
      {
        path: ':userId',
        component: UserComponent,
        data: {
          title: 'Info about User'
        },
        resolve: {
          currentUser: UserResolveService
        }
      },
      {
        path: '**',
        redirectTo: '/info'
      }
    ]
  },
  {
    path: 'info',
    loadChildren: './info/info.module#InfoModule'
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];
