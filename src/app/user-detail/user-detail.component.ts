import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor( private userService: UserService) {}

  user!: { name: string; job: string; gender: string; country: string; age: number; avatar: string; };

  ngOnInit() {
    this.userService.OnShowDetailsClicked.subscribe((data: {name: string, job: string,  gender: string, country: string, age: number, avatar: string}) =>{
      this.user = data;
    })
  }
}
