import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Process, startProcess } from 'src/app/interfaces/process';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-firststep-homologation',
  templateUrl: './firststep-homologation.component.html',
  styleUrls: ['./firststep-homologation.component.scss']
})
export class FirststepHomologationComponent {

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
    programaProcedencia: ['', [Validators.required]],
    programaInteres: ['', [Validators.required]]

  }
  );

  saveFirstStep() {
    if (this.form.valid) {
      const {
        programaProcedencia, programaInteres
      } = this.form.getRawValue();
      this.startProcess = {
        ... this.startProcess,
        programaProcedencia: programaProcedencia,
        programaInteres: programaInteres
      }
      this.programs.emit(this.startProcess)
    } else {
      this.form.markAllAsTouched();
    }
  }

}
