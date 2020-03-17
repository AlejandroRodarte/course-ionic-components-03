import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  public items = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(e): void {

    setTimeout(() => {
      this.items = new Array(40);
      e.target.complete();
    }, 1500);

  }

}
