import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input()
  public nombre: string;

  @Input()
  public pais: string;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  salirSinArgumentos(): void {
    this.modalController.dismiss();
  }

  salirConArgumentos(): void {
    this.modalController.dismiss({
      nombre: 'Felipe',
      pais: 'Italia'
    });
  }

}
