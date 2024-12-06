import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User> = [
    { id: 1, name: 'john', email: 'john@email.com' },
    { id: 2, name: 'Raj', email: 'Raj@email.com' },
    { id: 3, name: 'sam', email: 'sam@email.com' },
    { id: 4, name: 'kate', email: 'kate@email.com' },
  ];
  constructor() {
    console.log('UserService constructor')
  }

  addUser() {
    this.users.push({ id: 9, name: 'bill', email: 'u@d.com' });
  }
}
