import { Component } from '@angular/core';

@Component({
  selector: 'app-homologationsview',
  templateUrl: './homologationsview.component.html',
  styleUrls: ['./homologationsview.component.scss']
})
export class HomologationsviewComponent {


  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
