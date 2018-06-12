import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../common/services/users.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/internal/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public title: string;
  public userId: string;
  public currentUser: IUser;

  public form: FormGroup;
  public formWithEmails: FormGroup = new FormGroup({
    emails: new FormArray([new FormControl('')])
  });

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder
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


    this.form = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), this._nameValidor]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        cpassword: ['', [Validators.required, Validators.minLength(4)]],
      }, {
        asyncValidator: [this._asyncEqualValidator]
      })
    });
  }

  public addEmail(): void {
    (this.formWithEmails.get('emails') as FormArray)
      .push(new FormControl(''));
  }

  private _nameValidor(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value;
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    const error = valid
      ? null
      : {nospecial: true};
    return error;
  }

  private _asyncEqualValidator({value}: FormGroup): Observable<{ [key: string]: boolean } | null> {
    const [first, ...rest] = Object.keys(value || {});
    const valid: boolean = rest.every((v: string) => value[v] === value[first]);
    const error = valid
      ? null
      : {nospecial: true};
    return of(error).pipe(delay(5000));
  }

}
