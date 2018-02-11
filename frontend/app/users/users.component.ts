import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  public users:User[] = [];
  public selectedUser:User = null;

  constructor(private http: HttpClient) {
    http.get<User[]>('/api/users').subscribe(result => {
      this.users = result;
    });
  }

  ngOnInit() {
  }

  toggleUser(user:User) {
    if (user == this.selectedUser) {
      // unselect the user
      this.selectedUser = null;
    } else {
      // select the new user
      this.selectedUser = user;
    }
  }
}
