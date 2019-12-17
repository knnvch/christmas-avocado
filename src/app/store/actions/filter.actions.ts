import { createAction, props } from '@ngrx/store';

import { Filter } from '../../shared/models';

export const setFilter = createAction('[Filter] Set', props<Filter>());
