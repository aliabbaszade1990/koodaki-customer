import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';
import * as fromAuth from './+state/auth.reducer';
import { AuthApiService } from './apis/auth-api.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthFacade, AuthService, AuthApiService],
})
export class AuthDataAccessModule {}
