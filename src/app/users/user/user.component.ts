import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../common/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public title: string;
  public userId: string;
  public currentUser: IUser;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._activatedRoute.data.subscribe(({title, currentUser}: { title: string, currentUser: IUser }) => {
      this.title = title;
      this.currentUser = currentUser;
    });

    this._activatedRoute.params.subscribe(({userId}: { userId: string }) => {
      this.userId = userId;
    });
    this._activatedRoute.queryParams.subscribe((qparams: any) => {
      console.log(`qparams => ${Object.keys(qparams)} , ${qparams.a}`);
    });
  }

}
