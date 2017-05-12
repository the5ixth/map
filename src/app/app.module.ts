import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { MapComponent } from './map/map.component';
import { ForhonorService } from './forhonor.service';
import { TileComponent } from './tile/tile.component';
import { BannerComponent } from './banner/banner.component';

import { PopoverModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    MapComponent,
    TileComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: BannerComponent,
        children: [
          { path: '', component: MapComponent }
        ]
      },
      {
        path: 'archived/:S/:R/:T',
        component: BannerComponent,
        children: [
          { path: '', component: MapComponent }
        ]
      }
    ]),
    HttpModule
  ],
  providers: [
    ForhonorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
