import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CardService } from './services/card.service';

@NgModule({
  imports: [HttpClientModule],
  entryComponents: [],
  declarations: [],
  exports: [],
  providers: [CardService],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [CardService],
    };
  }
}
