import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserCreate, UserLogin } from '../interfaces/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ResponseList, ResponseObject } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$ = new BehaviorSubject<User | null>(null);
  user = this.user$.asObservable();

  constructor(private http: HttpClient) {



  }
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
        localStorage.setItem("UserLogin",JSON.stringify(user.data))
      })
    );
  }
  getUserById(id: number): Observable<ResponseObject<User>>{
    const url = `http://127.0.0.1:8000/api/usuario/${id}`;
    return this.http.get<ResponseObject<User>>(url)
  }
}
