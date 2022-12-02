import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as CoreActions from './core.actions';
import { CoreEffects } from './core.effects';
import { CoreFacade } from './core.facade';
import { CoreEntity } from './core.models';
import {
  CORE_FEATURE_KEY,
  CoreState,
  initialCoreState,
  coreReducer,
} from './core.reducer';
import * as CoreSelectors from './core.selectors';

interface TestSchema {
  core: CoreState;
}

describe('CoreFacade', () => {
  let facade: CoreFacade;
  let store: Store<TestSchema>;
  const createCoreEntity = (id: string, name = ''): CoreEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CORE_FEATURE_KEY, coreReducer),
          EffectsModule.forFeature([CoreEffects]),
        ],
        providers: [CoreFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(CoreFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allCore$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allCore$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadCoreSuccess` to manually update list
     */
    it('allCore$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allCore$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        CoreActions.loadCoreSuccess({
          core: [createCoreEntity('AAA'), createCoreEntity('BBB')],
        })
      );

      list = await readFirst(facade.allCore$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
