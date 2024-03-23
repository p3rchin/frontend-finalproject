import { Component, Input } from '@angular/core';
import { HomologationView, Homologations } from 'src/app/interfaces/homologations';

@Component({
  selector: 'app-repeat-card',
  templateUrl: './repeat-card.component.html',
  styleUrls: ['./repeat-card.component.scss']
})
export class RepeatCardComponent {
  @Input() homologation: HomologationView = {
    id: 0,
    id_estudiante: 0,
    id_materia: 0,
    nota: "",
    observacion: "",
    estado: "",
    activo: 0,
    created_at: "",
    updated_at: "",
    materia: {
        id: 0,
        nombre: "",
        descripcion: "",
        semestre: "",
        creditos: 0,
        id_programa: 0,
        activo: 0,
        created_at: "",
        updated_at: "",
        programa: {
            id: 0,
            nombre: ""
        }
    }
  }
  

isOpen = false;

mouseEnter() {
  this.isOpen = true;
}

mouseLeave() {
  this.isOpen = false;
}



}
