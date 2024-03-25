import { DIALOG_DATA, Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Subjects } from 'src/app/interfaces/subjects';

interface inputData {
  listSubjects: Subjects[];
}

interface outputData {
  rta: boolean;
}

@Component({
  selector: 'app-popup-subject',
  templateUrl: './popup-subject.component.html',
  styleUrls: ['./popup-subject.component.scss']
})
export class PopupSubjectComponent {

  listSubjects: Subjects[] = [];

  constructor(
    private dialogref: DialogRef<outputData>,
    @Inject(DIALOG_DATA) data: inputData,
  ){
    if(data){
      this.listSubjects = data.listSubjects;
      console.log(this.listSubjects)
    }
  }


  close(){
    this.dialogref.close();
  }

}
