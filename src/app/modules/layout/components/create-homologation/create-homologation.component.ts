import { Component, OnInit } from '@angular/core';
import { startProcess } from 'src/app/interfaces/process';
import { UserService } from 'src/app/services/user.service';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-create-homologation',
  templateUrl: './create-homologation.component.html',
  styleUrls: ['./create-homologation.component.scss']
})
export class CreateHomologationComponent implements OnInit {

  blob = new Blob(['contenido del archivo'], { type: 'tipo/mime' });
  idEstudiante: number = 0;


  startProcess: startProcess = {
    id: 0,
    programaProcedencia: "",
    programaInteres: "",
    rutaCertificadoNotas: new File([this.blob], 'nombre-del-archivo.pdf'),
    rutaContenidoPrograma: new File([this.blob], 'nombre-del-archivo.pdf'),
    rutaCertificadoConducta: new File([this.blob], 'nombre-del-archivo.pdf'),
    rutaSolicitudMotivacion: new File([this.blob], 'nombre-del-archivo.pdf'),
    idEstudiante: 0
  }


  firststep: boolean = true;
  secondstep: boolean = false;
  thirdstep: boolean = false;

  constructor(private userService: UserService, private processService: ProcessService) {
  }


  ngOnInit() {

    this.userService.user.subscribe(data => {
      if (data) {
        this.idEstudiante = data.id
        this.startProcess = {
          ...this.startProcess,
          idEstudiante: this.idEstudiante
        }
      }
    }
    );
  }


  continueFirstStep(startProcess: startProcess) {
    this.startProcess = {
      ...this.startProcess, programaProcedencia: startProcess.programaProcedencia, programaInteres: startProcess.programaInteres
    };
    this.firststep = false;
    this.secondstep = true;
    this.thirdstep = false;
  }

  continueSecondStep(startProcess: startProcess) {
    this.startProcess = {
      ...this.startProcess, rutaCertificadoNotas: startProcess.rutaCertificadoNotas, rutaContenidoPrograma: startProcess.rutaContenidoPrograma,
      rutaCertificadoConducta: startProcess.rutaCertificadoConducta, rutaSolicitudMotivacion: startProcess.rutaSolicitudMotivacion
    };

    this.firststep = false;
    this.secondstep = false;
    this.thirdstep = true;

    this.processService.registerProcess(this.startProcess).subscribe({
      next: (response) => {
 
        alert('Proceso iniciado exitosamente');
      },
      error: (error) => {
        console.error('Error al registrar el proceso', error);
        alert('Ocurrió un error al intentar registrar el proceso. Por favor, intente de nuevo.');
      }
    });

  }
}

