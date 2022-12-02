import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackbarService } from 'src/app/modules/core/services/snackbar.service';
import { NumberUtility } from 'src/app/shared/utilities';
import { SubSink } from 'subsink';

@Component({
  selector: 'koodaki-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackbar: SnackbarService
  ) {}

  otpCodeLenght: number = 4;
  form: FormGroup = this.fb.group({
    code: [
      null,
      [Validators.required, Validators.maxLength(4), Validators.minLength(4)],
    ],
  });

  subsink = new SubSink();
  time: Observable<number> = new Observable();
  inProgress = false;
  ngOnInit(): void {
    this.startCountDownTimer();

    this.time.subscribe((number: number) => {
      if (number === 0) {
        this.form.controls['code'].reset();
      }
    });
  }

  startCountDownTimer(): void {
    this.time = NumberUtility.countDown(40);
  }

  otpCode?: number;

  login(): void {
    this.inProgress = true;
    if (this.otpCodeIsValid()) {
      this.router.navigate(['/']);
    } else {
      this.snackbar.fail('کد وارد شده صحیح نیست');
    }
  }

  callOtpAgain() {}

  otpCodeIsValid(): boolean {
    return +this.form.controls['code'].value === this.otpCode;
  }

  get codeFormControl(): FormControl {
    return this.form.controls['code'] as FormControl;
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
