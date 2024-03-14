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
        rutaCertificadoNotas: rutaCertificadoNotas,
        rutaContenidoPrograma: rutaContenidoPrograma,
        rutaCertificadoConducta: rutaCertificadoConducta,
        rutaSolicitudMotivacion: rutaSolicitudMotivacion
      }
      this.programs.emit(this.startProcess)
    } else {
      this.form.markAllAsTouched();
    }
  }
}
