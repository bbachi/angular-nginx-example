import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getMaxListeners } from 'process';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  users = [
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'abc@gmail.com'
    },
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'abc@gmail.com'
    },
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'abc@gmail.com'
    }
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    return this.users.push(user);
  }

}
