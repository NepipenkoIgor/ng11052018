import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {SearchComponent} from './header/search/search.component';
import {CardComponent} from './users/users-list/card/card.component';
import {UsersFilterPipe} from './common/pipe/users-filter.pipe';
import {TooltipDirective} from './common/directives/tooltip.directive';
import {UsersService} from './common/services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {BASE_URL} from './config';
import {NonSingletonService} from './common/services/non-singleton.service';
import { InfoComponent } from './info/info.component';
import { UsersComponent } from './users/users.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { MenuComponent } from './header/menu/menu.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserComponent } from './users/user/user.component';
import {UserResolveService} from './users/user/user-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    UsersFilterPipe,
    TooltipDirective,
    InfoComponent,
    UsersComponent,
    MenuComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  // type, string, token
  providers: [
    // UsersService,
    NonSingletonService,
    UserResolveService,
    {provide: UsersService, useClass: UsersService},
    {provide: BASE_URL, useValue: environment.baseUrl},
    // {provide: BASE_URL, useValue: 'localhost:3000', multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
