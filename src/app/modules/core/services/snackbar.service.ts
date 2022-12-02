import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
  SimpleSnackBar,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { SnackbarType } from 'src/app/shared/enums';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private config: MatSnackBarConfig = {
    panelClass: 'ins-snackbar',
    verticalPosition: 'bottom',
    horizontalPosition: 'right',
  };

  constructor(private snackbar: MatSnackBar) {}

  fail(
    message: string,
    action: string = '',
    duration = 5000
  ): MatSnackBarRef<TextOnlySnackBar> {
    const errorMessage = message;
    return this.run(errorMessage, action, duration, SnackbarType.fail);
  }

  info(
    message: string,
    action: string = '',
    duration = 5000
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.run(message, action, duration, SnackbarType.info);
  }

  succeed(
    message: string,
    action: string = '',
    duration = 5000
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.run(message, action, duration, SnackbarType.succeed);
  }

  warn(
    message: string,
    action: string = '',
    duration = 5000
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.run(message, action, duration, SnackbarType.warn);
  }

  private run(
    message: string,
    action: string,
    duration: number,
    type: SnackbarType
  ): MatSnackBarRef<SimpleSnackBar> {
    this.config.panelClass = [
      this.config.panelClass as string,
      `ins-snackbar--${type}`,
    ];
    this.config.duration = duration;

    return this.snackbar.open(message as string, action as string, this.config);
  }

  private translateParam(param: string): string {
    return param;
  }
}
