import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SubSink } from 'subsink';
import { CoreEffects } from './+state/core.effects';
import { CoreFacade } from './+state/core.facade';
import * as fromCore from './+state/core.reducer';
import { CoreAuthApiService } from './apis/core-auth.api.service';
import { AuthorizedGuard } from './guards/authorized.guard';
import { UnauthorizedGuard } from './guards/unauthorized.guard';
import { CoreInterceptor } from './interceptors/core.interceptor';
import { CoreAuthService } from './services/core-auth.service';
import { InitializationService } from './services/initialization.service';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
  imports: [
    StoreModule.forFeature(fromCore.CORE_FEATURE_KEY, fromCore.coreReducer),
    EffectsModule.forFeature([CoreEffects]),
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInterceptor,
      multi: true,
    },
    InitializationService,
    SubSink,
    CoreFacade,
    CoreAuthApiService,
    CoreAuthService,
    InitializationService,
    AuthorizedGuard,
    UnauthorizedGuard,
    SnackbarService,
  ],
})
export class CoreModule {}
