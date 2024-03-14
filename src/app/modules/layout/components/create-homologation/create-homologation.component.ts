import { Component } from '@angular/core';
import { startProcess } from 'src/app/interfaces/process';

@Component({
  selector: 'app-create-homologation',
  templateUrl: './create-homologation.component.html',
  styleUrls: ['./create-homologation.component.scss']
})
export class CreateHomologationComponent {

  startProcess: startProcess = {
    id: 0,
    programaProcedencia: "",
    programaInteres: "",
    rutaCertificadoNotas: "",
    rutaContenidoPrograma: "",
    rutaCertificadoConducta: "",
    rutaSolicitudMotivacion: "",
    idEstudiante: 0
  }


  firststep: boolean = true;
  secondstep: boolean = false;
  thirdstep: boolean = false;


  continueFirstStep(startProcess: startProcess) {
    this.startProcess = {
      ...this.startProcess, programaProcedencia: startProcess.programaProcedencia, programaInteres: startProcess.programaInteres
    };
    this.firststep = false;
    this.secondstep = true;
    this.thirdstep = false;
  }

  continueSecondStep(startProcess: startProcess) {
    console.log(this.startProcess);
    this.startProcess = {
      ...this.startProcess, rutaCertificadoNotas: startProcess.rutaCertificadoNotas, rutaContenidoPrograma: startProcess.rutaContenidoPrograma,
      rutaCertificadoConducta: startProcess.rutaCertificadoConducta, rutaSolicitudMotivacion: startProcess.rutaSolicitudMotivacion
    };
    console.log(this.startProcess);
    this.firststep = false;
    this.secondstep = false;
    this.thirdstep = true;

  }




}

