import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class CoreEffects {
  constructor(private readonly actions$: Actions) {}
}
