import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomologationView, Homologations } from 'src/app/interfaces/homologations';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-cardview-homologation',
  templateUrl: './cardview-homologation.component.html',
  styleUrls: ['./cardview-homologation.component.scss']
})
export class CardviewHomologationComponent implements OnInit {
  listHomologations: HomologationView[] = [];
  user: User | null = null
  userId: number | null = null;

  @ViewChild('fileInputNotas') fileInputNotas!: ElementRef<HTMLInputElement>;
  @ViewChild('fileInputContenido') fileInputContenido!: ElementRef<HTMLInputElement>;
  @ViewChild('fileInputConducta') fileInputConducta!: ElementRef<HTMLInputElement>;
  @ViewChild('fileInputSolicitud') fileInputSolicitud!: ElementRef<HTMLInputElement>;


  constructor(private userService: UserService, private processService: ProcessService) {

  }

  ngOnInit() {
    const local = localStorage.getItem('UserLogin');
    const userN = JSON.parse(local ? local : "{}");
    this.userId = userN.id;
    if (this.userId) {
      this.userService.getHomologationsByUserId(this.userId).subscribe(response => {
        this.listHomologations = response.data;
      });
    }
  }
  openFileInput(inputElement: HTMLInputElement): void {
    inputElement.click();
  }

  uploadFile(event: any, tipoArchivo: string): void {
    const file = event.target.files[0];
    if (file && this.userId) {
      let formData = new FormData();
      formData.append(tipoArchivo, file);
      formData.append('id', this.userId.toString());

      this.processService.updateFiles(formData).subscribe({
        next: (response) => {
          console.log('Archivo subido con éxito', response);
          // Opcional: Actualizar la UI para reflejar la carga exitosa
        },
        error: (error) => {
          console.error('Error al subir el archivo', error);
          // Opcional: Mostrar algún mensaje de error en la UI
        }
      });
    }
  }
}
