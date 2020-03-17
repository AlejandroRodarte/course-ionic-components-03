import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Hero } from './../../interfaces/interfaces';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  public superheroes: Observable<Hero[]>;

  public valorSegmento = '';

  @ViewChild(IonSegment, { static: true })
  public segment: IonSegment;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superheroes = this.dataService.getHeroes();
  }

  segmentChanged(e: CustomEvent): void {
    this.valorSegmento = e.detail.value === 'todos' ? '' : e.detail.value;
  }

}
