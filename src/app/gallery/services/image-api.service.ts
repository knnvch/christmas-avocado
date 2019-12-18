import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { API_KEY } from '../../shared/config/constants';
import { AppState, Filter } from '../../shared/models';
import { setFilter } from '../../store/actions/filter.actions';

@Injectable({
    providedIn: 'root'
})
export class ImageApiService {
    private filterStore: Filter;

    constructor(
        private http: HttpClient,
        private store: Store<AppState>
    ) {
        this.store.select(state => state.filter)
            .subscribe(data => {
                this.filterStore = data;
            });
    }

    public getImages(params: Filter): Observable<any> {
        this.store.dispatch(setFilter(params));
        const { searchQuery, imageType, order } = this.filterStore;

        return this.http.get(`https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=${imageType}&order=${order}`);
    }
}
