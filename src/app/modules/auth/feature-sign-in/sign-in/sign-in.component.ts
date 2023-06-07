import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import {
  CoreFacade,
  SnackbarService,
  StorageService,
} from 'src/app/modules/core';
import { REGEX } from 'src/app/shared/constants';
import { AuthFacade } from '../../data-access/+state/auth.facade';
import { AuthApiService } from '../../data-access/apis/auth-api.service';
import { RequestOtpDto } from '../../data-access/dto/auth.dto';

@Component({
  selector: 'koodaki-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private coreFacade: CoreFacade,
    private router: Router,
    private snackbar: SnackbarService,
    private authApi: AuthApiService,
    private storage: StorageService
  ) {}
  form: FormGroup = this.fb.group({
    username: [
      null,
      [Validators.required, Validators.pattern(REGEX.cellphone)],
    ],
    password: ['changeMe'],
  });

  ngOnInit(): void {
    this.listenStore();
  }

  inProgress = false;
  listenStore() {
    this.authFacade.error$.pipe(filter((e) => !!e)).subscribe((result) => {
      this.inProgress = false;
      this.snackbar.fail(result as string);
    });
  }

  continue() {
    this.inProgress = true;
    const model: RequestOtpDto = {
      username: this.standardizePhoneNumber(
        this.form.controls['username'].value as string
      ),
    };
    this.authApi.otp(model).subscribe({
      next: (result) => {
        this.inProgress = false;
        if (result.user) {
          this.storage.savePhoneNumber(this.form.controls['username'].value);
          this.router.navigate(['auth/otp']);
        }
      },
      error: (error) => {
        this.inProgress = false;
        this.snackbar.fail(error.message);
      },
    });
  }

  private standardizePhoneNumber(phoneNumber: string): string {
    let newPhoneNumber = phoneNumber;
    if (phoneNumber && phoneNumber[0] === '0') {
      newPhoneNumber = phoneNumber.replace('0', '+98');
    }
    return newPhoneNumber;
  }
}
