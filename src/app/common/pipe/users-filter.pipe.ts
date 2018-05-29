import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from '../../users';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  public transform(users: IUser[], searchTerm: string): any {
    if (!searchTerm) {
      return users;
    }
    return users.filter((user: IUser) =>
      `${user.firstName} ${user.surname}`.toLowerCase()
        .includes(searchTerm.toLowerCase()));
  }

}
