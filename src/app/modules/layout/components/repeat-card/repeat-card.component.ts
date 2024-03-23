import { Component, Input } from '@angular/core';
import { Homologations } from 'src/app/interfaces/homologations';

@Component({
  selector: 'app-repeat-card',
  templateUrl: './repeat-card.component.html',
  styleUrls: ['./repeat-card.component.scss']
})
export class RepeatCardComponent {
  @Input() homologation: Homologations = {
    id: 0,
    idEstudiante: 0,
    idMateria: 0,
    nota: '',
    observacion: '',
    estado: '',
    activo: 0,
    created_at: '',
    updated_at: ''
  }
  
  isOpen = false;

  
}
