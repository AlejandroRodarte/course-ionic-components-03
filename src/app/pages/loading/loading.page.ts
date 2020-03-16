import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  private loading: HTMLIonLoadingElement;

  constructor(
    private loadingController: LoadingController
  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);

    this.presentLoading();

  }

  async presentLoading(message: string = 'Loading') {
    this.loading = await this.loadingController.create({ message });
    await this.loading.present();
  }

}
