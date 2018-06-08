import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  public placeholder;

  @Output()
  public search: EventEmitter<string> = new EventEmitter();

  public onSearch(e: KeyboardEvent): void {
    const el = e.target as HTMLInputElement;
    console.log(el.value);
    this.search.emit(el.value);
  }

}
