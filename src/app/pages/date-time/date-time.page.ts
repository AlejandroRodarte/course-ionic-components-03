import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(e: CustomEvent): void {
    console.log('Date', new Date(e.detail.value));
  }

}
