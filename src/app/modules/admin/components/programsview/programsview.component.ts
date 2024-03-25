import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Programs } from 'src/app/interfaces/programs';
import { Subjects } from 'src/app/interfaces/subjects';
import { ProgramsService } from 'src/app/services/programs.service';
import { PopupSubjectComponent } from '../popup-subject/popup-subject.component';

@Component({
  selector: 'app-programsview',
  templateUrl: './programsview.component.html',
  styleUrls: ['./programsview.component.scss']
})
export class ProgramsviewComponent {
  listPrograms: Programs[] = [];
  listSubjects: Subjects[] = [];
  idSeleccionado: number

  constructor(
    private programService: ProgramsService,
    private dialgog: Dialog) {

  }


  ngOnInit() {
    this.programService.getPrograms().subscribe(response => {
      this.listPrograms = response.data;
    });
  }

  saveId(id: number) {
    console.log(id)
    this.idSeleccionado = id
   
    this.programService.getSubjectsByProgram(this.idSeleccionado).subscribe(response => {
      this.listSubjects = response.data;
      this.dialgog.open(PopupSubjectComponent, {
        data: {
          listSubjects: this.listSubjects,
        }
      })
    });
  }

  isOpen = false;

  mouseEnter() {
    this.isOpen = true;
  }

  mouseLeave() {
    this.isOpen = false;
  }

}
