import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: User | null = null
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    const local = localStorage.getItem('UserLogin')
    const userN = JSON.parse(local ? local : "")
    this.userService.getUserById(userN.id).subscribe(data => {
      if (data) {
        this.user = data.data;
        this.userService.user$.next(this.user)
      }
    })
  }

  isOpen = false;

}
