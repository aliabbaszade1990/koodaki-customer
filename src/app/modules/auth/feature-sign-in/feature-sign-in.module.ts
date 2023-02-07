import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from '../../core';
import { AngularMaterialModule } from '../../shared';
import { AuthApiService } from '../data-access/apis/auth-api.service';
import { AuthDataAccessModule } from '../data-access/auth-data-access.module';

import { FeatureSignInRoutingModule } from './feature-sign-in-routing.module';
import { OtpComponent } from './otp/otp.component';
import { SigninComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [SigninComponent, OtpComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FeatureSignInRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AuthDataAccessModule,
    MatSnackBarModule,
    MatInputModule,
  ],
  providers: [SnackbarService, AuthApiService],
})
export class FeatureSignInModule {}
