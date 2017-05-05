import { Component, OnInit } from '@angular/core';
import { ForhonorService } from '../forhonor.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  dta: any;
  errorMsg: any;
  fhSub: any;

  constructor(private fhService: ForhonorService) { }

  ngOnInit() {
    this.fhSub = this.fhService.getState().subscribe(
      data => {
        this.dta = data;
      },
      error => {
        this.errorMsg = error;
        console.log(error);
      }
    );
  }

  tileKeys(): Array<string> {
    return this.dta ? Object.keys(this.dta) : [];
  }

}
