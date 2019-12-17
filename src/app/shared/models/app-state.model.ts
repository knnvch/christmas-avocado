import { Filter } from './filter.model';
import { FILTER_FEATURE_KEY } from '../config/constants';

export interface AppState {
    [FILTER_FEATURE_KEY]: Filter;
}
