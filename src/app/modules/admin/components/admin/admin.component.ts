import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  user:User|null=null
  constructor(private userService:UserService){
    
  }
  ngOnInit(): void {
    const local=localStorage.getItem('AdminLogin')
    const userN=JSON.parse(local?local:"")
    this.userService.getUserById(userN.id).subscribe(data=>{
      if(data){
        this.user=data.data;
        this.userService.user$.next(this.user)
      }
    })
  }
  isOpen = false;
}
