import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public componentes: Observable<Componente[]>;

  constructor(
    private dataService: DataService,
    private menuController: MenuController
  ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

  toggleMenu(): void {
    this.menuController.toggle();
  }

}
