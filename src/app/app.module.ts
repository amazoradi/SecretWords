import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { CardComponent } from './card/card.component';
import { CardService } from './shared/services/card.service';
import { GameReducer } from './state/game.reducer';
import { GameEffects } from './state/game.effects';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MapComponent, CardComponent],
  imports: [
    BrowserModule,
    SharedModule,
    StoreModule.forRoot({game: GameReducer}),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([GameEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
