import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from './../../models/user';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

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
    private dataService: DataService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(usuario: User) {
    console.log('favorite', usuario);
    this.lista.closeSlidingItems();
    this.presentToast('Se guardo en favoritos');
  }

  share(usuario: User) {
    console.log('share', usuario);
    this.lista.closeSlidingItems();
    this.presentToast('Compartido perro');
  }

  unread(usuario: User) {
    console.log('unread', usuario);
    this.lista.closeSlidingItems();
    this.presentToast('Borrado papu');
  }

  async presentToast(message: string) {

    const toast = await this.toastController.create({
      message,
      duration: 2000
    });

    await toast.present();

  }

}
