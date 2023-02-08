import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitializationService } from './modules/core';
import { CoreModule } from './modules/core/core.module';
import { UiDashboardLayoutModule } from './modules/ui-dashboard-layout/ui-dashboard-layout.module';

export function initializerFactory(authService: InitializationService) {
  return () => {
    return authService.initializeApp();
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    UiDashboardLayoutModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializerFactory,
      deps: [InitializationService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
