import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Ng Course';
  public logoSrc = 'assets/images/primeng.png';
  public width = 50;
  public placeholder = 'Search term';
  public searchTerm;

  public changeTitle(e: MouseEvent): void {
    console.log(e.target);
  }

  public onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
