import {Directive} from '@angular/core';
import {FormGroup, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {delay} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';

@Directive({
  selector: '[appAsyncEqualValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: asyncEqualValidator,
      multi: true
    }
  ]
})
export class AsyncEqualValidatorDirective {

  constructor() {
  }

}


export function asyncEqualValidator({value}: FormGroup): Observable<{ [key: string]: boolean } | null> {
  const [first, ...rest] = Object.keys(value || {});
  const valid: boolean = rest.every((v: string) => value[v] === value[first]);
  const error = valid
    ? null
    : {nospecial: true};
  return of(error).pipe(delay(5000));
}
