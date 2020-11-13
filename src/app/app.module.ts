import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { CardComponent } from './card/card.component';
import { CardService } from './sharred/services/card.service';
import { StoreModule } from '@ngrx/store';
import { GameReducer } from './state/game.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './state/game.effects';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(GameReducer),
    // EffectsModule.forRoot([GameEffects,])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
