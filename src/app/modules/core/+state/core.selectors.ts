import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GetUserDTO } from '../../auth/data-access/dto/get-user.dto';
import { CoreState, CORE_FEATURE_KEY } from './core.reducer';

export const getCoreState = createFeatureSelector<CoreState>(CORE_FEATURE_KEY);

export const getUser = createSelector(
  getCoreState,
  (state: CoreState) => state.user as GetUserDTO
);

export const initialized = createSelector(
  getCoreState,
  (state: CoreState) => state.initialized
);

export const $sessionExpired = createSelector(
  getCoreState,
  (state: CoreState) => {
    return state.sessionExpired;
  }
);
