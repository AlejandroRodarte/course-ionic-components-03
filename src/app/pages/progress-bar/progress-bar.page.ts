import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  public porcentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }

  cambioRango(e: CustomEvent): void {
    console.log(e.detail.value);
    this.porcentaje = e.detail.value as number / 100;
  }

}
