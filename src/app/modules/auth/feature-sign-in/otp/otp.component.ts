import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { CoreFacade, StorageService } from 'src/app/modules/core';
import { NumberUtility } from 'src/app/shared/utilities';
import { SubSink } from 'subsink';
import { LoginDTO } from '../../data-access/dto/auth.dto';
import { AuthService } from '../../data-access/services/auth.service';

@Component({
  selector: 'koodaki-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private storage: StorageService,
    private coreFacade: CoreFacade
  ) {}

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
    this.listenStore();
    this.time.subscribe((number: number) => {
      if (number === 0) {
        this.form.controls['code'].reset();
      }
    });
  }

  startCountDownTimer(): void {
    this.time = NumberUtility.countDown(40);
  }

  listenStore() {
    this.coreFacade.user$.pipe(filter((u) => !!u)).subscribe((user) => {
      this.router.navigate(['panel/projects/list']);
    });
  }

  login(): void {
    this.inProgress = true;
    const model: LoginDTO = {
      username: this.standardizePhoneNumber(this.storage.phoneNumber as string),
      password: this.form.controls['code'].value,
    };

    this.authService.login(model);
  }

  private standardizePhoneNumber(phoneNumber: string): string {
    let newPhoneNumber = phoneNumber;
    if (phoneNumber && phoneNumber[0] === '0') {
      newPhoneNumber = phoneNumber.replace('0', '+98');
    }
    return newPhoneNumber;
  }

  get codeFormControl(): FormControl {
    return this.form.controls['code'] as FormControl;
  }

  callOtpAgain() {}

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
