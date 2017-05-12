import { Component, OnInit } from '@angular/core';
import { ForhonorService } from '../forhonor.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  dta: any;
  errorMsg: any;
  fhSub: any;
  sub: any;
  S: any;
  R: any;
  T: any;


  constructor(
              private fhService: ForhonorService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.S = +params['S'],
      this.R = +params['R'],
      this.T = +params['T']
    })
    if ( isNaN(this.S) || isNaN(this.R) || isNaN(this.T)) {
      this.fhSub = this.fhService.getState().subscribe(
        data => {
          this.dta = data;
          this.S = null
          this.R = null
          this.T = null
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
    return this.dta ? Object.keys(this.dta) : [];
  }

  


}
