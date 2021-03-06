import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar-profile',
  templateUrl: './sidebar-profile.component.html',
  styleUrls: ['./sidebar-profile.component.scss']
})
export class SidebarProfileComponent implements OnInit {

  userID: string;
  user: any;
  username: string;
  userImg: string;

  constructor(private route: Router, private apiService: ApiService, public auth: AuthService) {
    this.userID = JSON.parse(sessionStorage.getItem("LoggedInUser"));
  }

  ngOnInit() {
    this.apiService.getUsersById(this.userID).subscribe(user => {
      this.user = user;
      
      this.username = user.username;
      this.userImg = user.img;
    })
  }

}
