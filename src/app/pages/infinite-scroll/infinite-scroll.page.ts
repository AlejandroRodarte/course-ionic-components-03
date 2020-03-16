import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false })
  public infiniteScroll: IonInfiniteScroll;

  public data = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(e): void {

    console.log('Cargandos siguientes items...');

    setTimeout(() => {

      if (this.data.length > 50) {
        e.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      this.data.push(...Array(20));
      e.target.complete();

    }, 1000);

  }

}
