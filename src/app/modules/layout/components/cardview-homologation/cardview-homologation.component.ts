import { Component, OnInit } from '@angular/core';
import { Homologations } from 'src/app/interfaces/homologations';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cardview-homologation',
  templateUrl: './cardview-homologation.component.html',
  styleUrls: ['./cardview-homologation.component.scss']
})
export class CardviewHomologationComponent implements OnInit{
  listHomologations: Homologations[] = [];
  user:User|null=null
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    const local = localStorage.getItem('UserLogin')
    const userN = JSON.parse(local ? local : "")
    this.userService.getHomologationsByUserId(userN.id).subscribe(response => {
      console.log(response)
      this.listHomologations = response.data;
    });
  }

}
