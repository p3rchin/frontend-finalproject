import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ResponseList, ResponseObject } from '../interfaces/responses';
import { startProcess } from '../interfaces/process';


@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private http: HttpClient) { }

  registerProcess(process: startProcess): Observable<any> {
    const url = "http://127.0.0.1:8000/api/proceso";
    let formData = new FormData();
    formData.append('programa_procedencia', process.programaProcedencia);
    formData.append('programa_interes', process.programaInteres);
    formData.append('ruta_certificado_notas', process.rutaCertificadoNotas);
    formData.append('ruta_contenido_programa', process.rutaContenidoPrograma);
    formData.append('ruta_certificado_conducta', process.rutaCertificadoConducta);
    formData.append('ruta_solicitud_motivacion', process.rutaSolicitudMotivacion);
    formData.append('id_estudiante', process.idEstudiante.toString());
    return this.http.post<any>(url, formData);
  }

  // downloadFiles(id: number): Observable<ResponseList<HomologationView>> {
  //   const url = `http://127.0.0.1:8000/api/user/viewHomologations`;
  //   let params = new HttpParams();
  //   params = params.append('id', id);
  //   return this.http.get<ResponseList<HomologationView>>(url, { params: params })
  // }
}
