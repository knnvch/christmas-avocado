import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_KEY } from '../../shared/config/constants';
import { Filter } from '../../shared/models';

@Injectable({
    providedIn: 'root'
})
export class ImageApiService {

    constructor(private http: HttpClient) { }

    public getImages(params: Filter): Observable<any> {
        const { searchQuery, imageType, order } = params;

        return this.http.get(`https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=${imageType}&order=${order}`);
    }
}
