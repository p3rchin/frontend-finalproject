import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCreate, UserLogin } from '../interfaces/user';
import { Observable } from 'rxjs';
import { ResponseList, ResponseObject } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {



  }
  registerUser(user: UserCreate): Observable<any> {
    const url = "http://127.0.0.1:8000/api/usuario";
    return this.http.post<any>(url, user);
  }
  loginUser(user: UserLogin): Observable<ResponseObject<boolean>> {
    const url = "http://127.0.0.1:8000/api/user/login";
    let params = new HttpParams();
    params = params.append("email", user.email);
    params = params.append("password", user.password);
    return this.http.get<ResponseObject<boolean>>(url, { params: params });
  }

}
