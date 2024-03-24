import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students, User, UserCreate, UserLogin, UserProcess } from '../interfaces/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ResponseList, ResponseObject } from '../interfaces/responses';
import { HomologationView, Homologations } from '../interfaces/homologations';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$ = new BehaviorSubject<User | null>(null);
  user = this.user$.asObservable();

  constructor(private http: HttpClient) {}

  registerUser(user: UserCreate): Observable<any> {
    const url = "http://127.0.0.1:8000/api/usuario";
    return this.http.post<any>(url, user);
  }

  loginUser(user: UserLogin): Observable<ResponseObject<User>> {
    const url = "http://127.0.0.1:8000/api/user/loginUser";
    let params = new HttpParams();
    params = params.append("email", user.email);
    params = params.append("password", user.password);
    return this.http.get<ResponseObject<User>>(url, { params: params }).pipe(
      tap(user => {
        localStorage.setItem("UserLogin", JSON.stringify(user.data))
      })
    );
  }
  
  loginAdmin(user: UserLogin): Observable<ResponseObject<User>> {
    const url = "http://127.0.0.1:8000/api/user/loginAdmin";
    let params = new HttpParams();
    params = params.append("email", user.email);
    params = params.append("password", user.password);
    return this.http.get<ResponseObject<User>>(url, { params: params }).pipe(
      tap(user => {
        localStorage.setItem("AdminLogin", JSON.stringify(user.data))
      })
    );
  }
  
  getUserById(id: number): Observable<ResponseObject<User>> {
    const url = `http://127.0.0.1:8000/api/usuario/${id}`;
    return this.http.get<ResponseObject<User>>(url)
  }

  getHomologationsByUserId(id: number): Observable<ResponseList<HomologationView>> {
    const url = `http://127.0.0.1:8000/api/user/viewHomologations`;
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<ResponseList<HomologationView>>(url, { params: params })
  }

  getusersWithProcess(): Observable<ResponseList<UserProcess>> {
    const url = `http://127.0.0.1:8000/api/user/userWithProcess`;
    return this.http.get<ResponseList<UserProcess>>(url)
  }

  getStudents(): Observable<ResponseList<Students>> {
    const url = `http://127.0.0.1:8000/api/usuario`;
    return this.http.get<ResponseList<Students>>(url)
  }
}
