import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../shared';

import { FeatureSignInRoutingModule } from './feature-sign-in-routing.module';
import { OtpComponent } from './otp/otp.component';
import { SigninComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [SigninComponent, OtpComponent],
  imports: [
    CommonModule,
    FeatureSignInRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
})
export class FeatureSignInModule {}
