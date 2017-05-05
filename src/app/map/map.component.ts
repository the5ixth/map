import { Component, OnInit } from '@angular/core';
import { ForhonorService } from '../forhonor.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  tiles: Object;
  dta: any;
  errorMsg: any;
  fhSub: any;

  constructor(private fhService: ForhonorService) { }

  ngOnInit() {
    this.fhSub = this.fhService.getState().subscribe(
      data => {
        this.tiles = data['locationsMap'];
        this.dta = data;
      },
      error => {
        this.errorMsg = error;
        console.log(error);
      }
    );
  }

  tileKeys(): Array<string> {
    return this.tiles ? Object.keys(this.tiles) : [];
  }

}
