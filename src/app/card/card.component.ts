import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../users';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public user: IUser;

  @Input()
  public position: number;

  @Input()
  public isOdd: boolean;

  constructor() { }

  ngOnInit() {
  }

}
