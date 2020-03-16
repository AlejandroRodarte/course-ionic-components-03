import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from './../../models/user';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', { static: false })
  public lista: IonList;

  public usuarios: Observable<User>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(usuario: User) {
    console.log('favorite', usuario);
    this.lista.closeSlidingItems();
  }

  share(usuario: User) {
    console.log('share', usuario);
    this.lista.closeSlidingItems();
  }

  unread(usuario: User) {
    console.log('unread', usuario);
    this.lista.closeSlidingItems();
  }

}
