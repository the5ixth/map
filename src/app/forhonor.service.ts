import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ForhonorService {

  currentTurn: string = 'S1R3T44';
  apiUrl: string = 'https://metagame.forhonor.ubisoft.com/3022535332/WorldState/archive/';
  currentState: string = 'https://metagame.forhonor.ubisoft.com/3022535332/WorldState-current'

  constructor(private http: Http) { }

  getState(): Observable<any> {
    return this.http.get(`${this.currentState}.json`).map(	
      data => data.json(),
      err => err
    );
  }

  getPast(S: number, R: number, T: number): Observable<any> {
    return this.http.get(`${this.apiUrl}S${S}R${R}T${T}.json`).map(
      data => <any>data.json(),
      err => err
    );
  }
}
