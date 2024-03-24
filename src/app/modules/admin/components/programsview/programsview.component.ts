import { Component } from '@angular/core';
import { Programs } from 'src/app/interfaces/programs';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-programsview',
  templateUrl: './programsview.component.html',
  styleUrls: ['./programsview.component.scss']
})
export class ProgramsviewComponent {
  listprograms: Programs[] = [];

  constructor(private programService: ProgramsService) {

  }


  ngOnInit() {
    this.programService.getPrograms().subscribe(response => {
      this.listprograms = response.data;
    });
  }

}
