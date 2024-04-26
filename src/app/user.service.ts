import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}
  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }
}
