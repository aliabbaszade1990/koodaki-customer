import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { CoreFacade, SnackbarService } from 'src/app/modules/core';
import { REGEX } from 'src/app/shared/constants';
import { AuthFacade } from '../../data-access/+state/auth.facade';
import { AuthApiService } from '../../data-access/apis/auth-api.service';

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
    private authApi: AuthApiService
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
    this.coreFacade.user$.pipe(filter((u) => !!u)).subscribe((result) => {
      this.router.navigate(['/']);
    });

    this.authFacade.error$.pipe(filter((e) => !!e)).subscribe((result) => {
      this.inProgress = false;
      this.snackbar.fail(result as string);
    });
  }

  continue() {
    this.standardizePhoneNumber();
    this.authFacade.login(this.form.value);
  }

  private standardizePhoneNumber(): void {
    if (this.form.value.username[0] === '0') {
      this.form.value.username = (this.form.value.username as string).replace(
        '0',
        '+98'
      );
    }
  }
}
