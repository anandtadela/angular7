import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
    loginHandler(username: string, password: string): Observable<any> {
      return this.http.post<any>('/login', {username, password});
    }
}
