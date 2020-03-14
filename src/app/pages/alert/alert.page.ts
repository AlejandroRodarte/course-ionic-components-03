import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  public titulo = 'Alert Page';

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {

    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => console.log('Cancelado')
        },
        {
          text: 'Ok',
          handler: blah => console.log('Boton OK')
        }
      ]
    });

    await alert.present();

  }

  async presentAlertPrompt() {

    const alert = await this.alertController.create({
      header: 'Prompt!',
      subHeader: 'This is a prompt',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => console.log('Cancelado')
        },
        {
          text: 'Ok',
          handler: ({ name1 }) => this.titulo = name1
        }
      ]
    });

    await alert.present();

  }

}
