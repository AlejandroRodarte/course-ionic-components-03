import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Componente, Album } from './../interfaces/interfaces';
import { Hero } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

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

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('/assets/data/superheroes.json').pipe(delay(2000));
  }

}
