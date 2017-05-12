import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  season: number;
  round: number;
  turn: number;

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  goToTurn(s, r, t): void{
    this.router.navigate([ '/archived/', s, r, t ]);
  }

}
