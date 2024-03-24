import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Process, startProcess } from 'src/app/interfaces/process';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-secondstep-homologation',
  templateUrl: './secondstep-homologation.component.html',
  styleUrls: ['./secondstep-homologation.component.scss']
})
export class SecondstepHomologationComponent {
  blob = new Blob(['contenido del archivo'], { type: 'tipo/mime' });

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
  constructor(private router: Router, private formBuilder: FormBuilder, private processService: ProcessService) {

  }

  @Output() programs = new EventEmitter<startProcess>();



  form = this.formBuilder.nonNullable.group({
    rutaCertificadoNotas: ['', [Validators.required]],
    rutaContenidoPrograma: ['', [Validators.required]],
    rutaCertificadoConducta: ['', [Validators.required]],
    rutaSolicitudMotivacion: ['', [Validators.required]],
  }
  );

  saveSecondStep() {
    if (this.form.valid) {
      const {
        rutaCertificadoNotas, rutaContenidoPrograma, rutaCertificadoConducta, rutaSolicitudMotivacion
      } = this.form.getRawValue();
      this.startProcess = {
        ... this.startProcess,
      }

      if (this.startProcess.rutaCertificadoNotas.name === 'nombre-del-archivo.pdf' && this.startProcess.rutaCertificadoConducta.name === 'nombre-del-archivo.pdf' && this.startProcess.rutaSolicitudMotivacion.name === 'nombre-del-archivo.pdf' && this.startProcess.rutaContenidoPrograma.name === 'nombre-del-archivo.pdf') {
        alert("Selecciona todos los archivos");
      }

      this.programs.emit(this.startProcess)
    } else {
      alert("Selecciona todos los archivos");
      this.form.markAllAsTouched();
    }
  }

  changeFileOne(event: any) {
    let file = event.target.files[0];
    let fileExtension = file.name.split('.').pop();

    if (fileExtension.toLowerCase() !== 'pdf') {
      alert('Por favor, sube un archivo PDF.');
      return;
    } else {
      this.startProcess = {
        ...this.startProcess,
        rutaCertificadoNotas: file,
      }
      console.log(this.startProcess);
    }
  }

  changeFileTwo(event: any) {
    this.startProcess = {
      ...this.startProcess,
      rutaContenidoPrograma: event.target.files[0],
    }
    console.log(this.startProcess);
  }

  changeFileThree(event: any) {
    this.startProcess = {
      ...this.startProcess,
      rutaCertificadoConducta: event.target.files[0],
    }
    console.log(this.startProcess);
  }
  
  changeFileFour(event: any) {
    this.startProcess = {
      ...this.startProcess,
      rutaSolicitudMotivacion: event.target.files[0],
    }
    console.log(this.startProcess);
  }
}
