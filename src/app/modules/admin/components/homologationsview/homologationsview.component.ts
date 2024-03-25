import { Component, Input } from '@angular/core';
import { Homologacion, HomologacionesRequest, HomologationCreate, Homologations } from 'src/app/interfaces/homologations';
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
  listHomologations: Homologations[] = [];
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
    this.homologationService.getHomologations().subscribe(response => {
      this.listHomologations = response.data;
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

  removeDuplicateSubjects(): Subject[] {
    const subjectsSet = new Set<number>();
    const uniqueSubjects: Subject[] = [];
    for (const item of this.listSubject) {
      if (!subjectsSet.has(item.subject)) {
        subjectsSet.add(item.subject);
        uniqueSubjects.push(item);
      }
    }
    return uniqueSubjects;
  }

  homologationGrades() {
    let homologations: HomologacionesRequest = {
      homologaciones: [],
    }
    this.listSubject = this.removeDuplicateSubjects();
    this.listSubject.map(item => {
      let homologation: Homologacion = {
        id_estudiante: 1,
        id_materia: 1,
        nota: "4",
        observacion: "nota ejemplo",
      };
      for (let i = 0; i < this.listHomologations.length; i++) {
        if (item.subject === this.listHomologations[i].id_materia && this.idSeleccionado === this.listHomologations[i].id_estudiante) {
          alert("Esta materia ya está homologada: " + this.listHomologations[i].nombre_materia)
          return;
        } else {
          homologation = {
            id_estudiante: this.idSeleccionado,
            id_materia: item.subject,
            nota: item.grade.toString(),
            observacion: item.observation,
          }
        }
      }
      homologations.homologaciones.push(homologation);
    })
    this.homologationService.createHomologations(homologations).subscribe({
      next: (data) => {
        if (data.result) {
          console.log('Creado correctamente')
          this.isOpenHomologation = false;
        }
      },
      error: () => {

      }
    })
  }
}
