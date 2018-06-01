import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {SearchComponent} from './search/search.component';
import {CardComponent} from './card/card.component';
import {UsersFilterPipe} from './common/pipe/users-filter.pipe';
import {TooltipDirective} from './common/directives/tooltip.directive';
import {UsersService} from './common/services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {BASE_URL} from './config';
import {NonSingletonService} from './common/services/non-singleton.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    UsersFilterPipe,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  // type, string, token
  providers: [
    // UsersService,
    NonSingletonService,
    {provide: UsersService, useClass: UsersService},
    {provide: BASE_URL, useValue: environment.baseUrl},
    // {provide: BASE_URL, useValue: 'localhost:3000', multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
