import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { MapComponent } from './map/map.component';
import { ForhonorService } from './forhonor.service';
import { TileComponent } from './tile/tile.component';

import { PopoverModule } from 'ngx-bootstrap';
import { BannerComponent } from './banner/banner.component';

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
    HttpModule
  ],
  providers: [
    ForhonorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
