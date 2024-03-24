import { Component, Input } from '@angular/core';
import { Homologacion, HomologacionesRequest, HomologationCreate } from 'src/app/interfaces/homologations';
import { Subjects } from 'src/app/interfaces/subjects';
import { UserProcess } from 'src/app/interfaces/user';
import { HomologationsService } from 'src/app/services/homologations.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { UserService } from 'src/app/services/user.service';

interface Subject {
  id: number;
  subject: number;
  grade: number;
  observation: string;
}

@Component({
  selector: 'app-homologationsview',
  templateUrl: './homologationsview.component.html',
  styleUrls: ['./homologationsview.component.scss']
})
export class HomologationsviewComponent {
  @Input() userProcess: UserProcess = {
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
  idSeleccionado: number
  listSubjects: Subjects[] = [];
  listUserProcess: UserProcess[] = [];
  isOpen = false;
  isOpenHomologation = false;
  listSubject: Subject[] = [
    {
      id: 1,
      subject: 1,
      grade: 50,
      observation: 'Nota ejemplo',
    },
  ]
  constructor(
    private userService: UserService, 
    private subjectsService: SubjectsService,
    private homologationService: HomologationsService) {

  }

  toggleHomologationOverlay() {
    this.isOpenHomologation = !this.isOpenHomologation;
  }

  ngOnInit() {
    this.userService.getusersWithProcess().subscribe(response => {
      this.listUserProcess = response.data;
      this.listUserProcess.map(item => { item.isOpen = false })
    });

    this.subjectsService.getSubjects().subscribe(response => {
      this.listSubjects = response.data;
    });


  }

  addSubject() {
    const subject: Subject = {
      id: this.calculateId(),
      subject: 1,
      grade: 0.0,
      observation: ''
    }
    this.listSubject.push(subject);
  }

  removeSubject(id: number) {
    this.listSubject = this.listSubject.filter(item => item.id !== id);
  }

  calculateId() {
    if (this.listSubject.length === 0) {
      return 1;
    } else {
      return this.listSubject.length + 1;
    }
  }

  saveId(id: number) {
    this.idSeleccionado = id
  }

  removeSubjects() {
    this.listSubject = [
      {
        id: 0,
        subject: 1,
        grade: 50,
        observation: 'Nota ejemplo',
      },
    ]
  }

  homologationGrades() {
    let homologations: HomologacionesRequest = {
      homologaciones: [],
    }
    this.listSubject.map(item => {
      const homologation: Homologacion = {
        id_estudiante: this.idSeleccionado,
        id_materia: item.subject,
        nota: item.grade.toString(),
        observacion: item.observation,
      }
      homologations.homologaciones.push(homologation);
    })
    this.homologationService.createHomologations(homologations).subscribe({
      next: (data) => {
        if(data.result){
          console.log('Creado correactemente')
          this.isOpenHomologation = false;
        }
      },
      error: () => {

      }
    })

  }

}
