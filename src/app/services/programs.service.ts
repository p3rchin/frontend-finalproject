import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, SubjectLike, tap } from 'rxjs';
import { ResponseList, ResponseObject } from '../interfaces/responses';
import { Programs } from '../interfaces/programs';
import { Subjects } from '../interfaces/subjects';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http: HttpClient) {
  }

  getPrograms(): Observable<ResponseList<Programs>> {
    const url = `http://127.0.0.1:8000/api/programa`;
    return this.http.get<ResponseList<Programs>>(url)
  }

  getSubjectsByProgram(id: number): Observable<ResponseList<Subjects>> {
    const url = `http://127.0.0.1:8000/api/programas/materiasporprograma`;
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<ResponseList<Subjects>>(url, { params: params })
  }


}
