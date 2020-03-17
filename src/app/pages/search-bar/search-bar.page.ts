import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Album } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  public albumes: Album[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this
      .dataService
      .getAlbums()
      .subscribe(albumes => this.albumes = albumes);
  }

  buscar(e: CustomEvent) {
    console.log(e);
  }

}
