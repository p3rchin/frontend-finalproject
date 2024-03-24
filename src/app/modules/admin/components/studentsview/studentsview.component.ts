import { Component } from '@angular/core';
import { Students } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-studentsview',
  templateUrl: './studentsview.component.html',
  styleUrls: ['./studentsview.component.scss']
})
export class StudentsviewComponent {
  listStudents: Students[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getStudents().subscribe(response => {
      this.listStudents = response.data;
    });
  }
}

