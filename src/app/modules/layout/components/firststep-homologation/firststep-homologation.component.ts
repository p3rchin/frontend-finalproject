import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Process, startProcess } from 'src/app/interfaces/process';
import { Programs } from 'src/app/interfaces/programs';
import { ProcessService } from 'src/app/services/process.service';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-firststep-homologation',
  templateUrl: './firststep-homologation.component.html',
  styleUrls: ['./firststep-homologation.component.scss']
})
export class FirststepHomologationComponent implements OnInit {
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

  listPrograms: Programs[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private processService: ProcessService, private programsService: ProgramsService) {

  }

  @Output() programs = new EventEmitter<startProcess>();



  form = this.formBuilder.nonNullable.group({
    programaProcedencia: ['', [Validators.required]],
    programaInteres: ['', [Validators.required]]

  }
  );

  ngOnInit() {
    this.programsService.getPrograms().subscribe(response => {
      this.listPrograms = response.data;
    });
  }

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