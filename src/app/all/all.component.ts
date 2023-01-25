import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  constructor( private userService: UserService) {}
 users: {name: string, job: string,  gender: string, country: string, age: number, avatar: string}[] = [];

 ngOnInit() {
  this.users = this.userService.users;
 }

 showDetails(user:{name: string, job: string,  gender: string, country: string, age: number, avatar: string} ) {
  this.userService.ShowUserDetails(user);
 }
}
