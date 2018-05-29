import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { UsersFilterPipe } from './common/pipe/users-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';

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
    MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
