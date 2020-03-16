import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Componente } from './../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

}
