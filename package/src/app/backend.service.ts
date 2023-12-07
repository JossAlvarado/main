// backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  getShoes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/shoes`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  // Agrega más métodos según tus necesidades
}
