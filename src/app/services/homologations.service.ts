import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseList, ResponseObject } from '../interfaces/responses';
import { Observable } from 'rxjs';
import { HomologacionesRequest, Homologations } from '../interfaces/homologations';

@Injectable({
  providedIn: 'root'
})
export class HomologationsService {

  constructor(private http: HttpClient) {
   }
   getHomologations(): Observable<ResponseList<Homologations>> {
    const url = `http://127.0.0.1:8000/api/homologacion`;
    return this.http.get<ResponseList<Homologations>>(url)
  }

  createHomologations(homogolations: HomologacionesRequest): Observable<ResponseObject<any>> {
    const url = `http://127.0.0.1:8000/api/homologacion`;
    return this.http.post<ResponseObject<any>>(url, homogolations)
  }
}
