import { Component } from '@angular/core';

@Component({
  selector: 'app-homologationsview',
  templateUrl: './homologationsview.component.html',
  styleUrls: ['./homologationsview.component.scss']
})
export class HomologationsviewComponent {


  isOpen = false;
  isOpenHomologation = false;

  toggleHomologationOverlay() {
    this.isOpenHomologation = !this.isOpenHomologation;
  }


}
