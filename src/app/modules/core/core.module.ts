import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SubSink } from 'subsink';
import { CoreEffects } from './+state/core.effects';
import { CoreFacade } from './+state/core.facade';
import * as fromCore from './+state/core.reducer';
import { CoreAuthApiService } from './apis/core-auth.api.service';
import { AutherizedGuard } from './guards/autherized.guard';
import { UnautherizedGuard } from './guards/unautherized.guard';
import { CoreInterceptor } from './interceptors/core.interceptor';
import { CoreAuthService } from './services/core-auth.service';
import { InitializationService } from './services/initialization.service';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
  imports: [
    StoreModule.forFeature(fromCore.CORE_FEATURE_KEY, fromCore.coreReducer),
    EffectsModule.forFeature([CoreEffects]),
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
    AutherizedGuard,
    UnautherizedGuard,
    SnackbarService,
  ],
})
export class CoreModule {}
