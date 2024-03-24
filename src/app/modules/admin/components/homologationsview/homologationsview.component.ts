import { Component, Input } from '@angular/core';
import { UserProcess } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homologationsview',
  templateUrl: './homologationsview.component.html',
  styleUrls: ['./homologationsview.component.scss']
})
export class HomologationsviewComponent {
  @Input() userProcess: UserProcess  = {
    id: 0,
    nombre: "",
    apellido: "",
    telefono: "",
    id_tipo_identificacion: 0,
    numero_identificacion: "",
    id_rol: 0,
    email: "",
    direccion: "",
    activo: 0,
    created_at: "",
    updated_at: "",
    programa_procedencia: "",
    programa_interes: "",
    ruta_certificado_notas: "",
    ruta_contenido_programa: "",
    ruta_certificado_conducta: "",
    ruta_solicitud_motivacion: "",
    id_estudiante: 0
  }
  listUserProcess: UserProcess[] = [];
  isOpen = false;
  isOpenHomologation = false;
  constructor(private userService: UserService) {

  }

  toggleHomologationOverlay() {
    this.isOpenHomologation = !this.isOpenHomologation;
  }

  ngOnInit() {
    this.userService.getusersWithProcess().subscribe(response => {
      this.listUserProcess = response.data;
      this.listUserProcess.map(item=>{item.isOpen=false})
    });

  }


}
