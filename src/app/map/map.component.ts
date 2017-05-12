import { Component, OnInit } from '@angular/core';
import { ForhonorService } from '../forhonor.service';
import { ActivatedRoute, Params } from '@angular/router';

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
  sub: any;
  S: number;
  R: number;
  T: number;

  constructor(
              private fhService: ForhonorService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.S = +params['S'],
      this.R = +params['R'],
      this.T = +params['T']
    })
    if ( isNaN(this.S) ) {
      this.fhSub = this.fhService.getState().subscribe(
        data => {
          this.tiles = data['locationsMap'];3
          this.dta = data;
        },
        error => {
          this.errorMsg = error;
          console.log(error);
        }
      );
    }
    else {
      this.fhSub = this.fhService.getPast(this.S, this.R, this.T).subscribe(
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
  }

  tileKeys(): Array<string> {
    return this.tiles ? Object.keys(this.tiles) : [];
  }

}
