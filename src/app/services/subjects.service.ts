import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseList } from '../interfaces/responses';
import { Subjects } from '../interfaces/subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<ResponseList<Subjects>> {
    const url = `http://127.0.0.1:8000/api/materia`;
    return this.http.get<ResponseList<Subjects>>(url)
  }
}
