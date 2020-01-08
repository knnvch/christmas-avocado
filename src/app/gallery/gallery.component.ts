import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IMAGE_TYPES, ORDERS } from '../shared/config/constants';
import { FilterSelect, Avocado, Filter } from '../shared/models';
import { ImageApiService } from './services/image-api.service';
import { setFilter } from '../store/actions/filter.actions';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    public avocados$: Observable<{ hits: Avocado[] }>;
    public filter: FormGroup;
    public imageTypes: FilterSelect[];
    public orders: FilterSelect[];

    constructor(
        private imageApiService: ImageApiService,
        private store: Store<Filter>
    ) {
        this.imageTypes = IMAGE_TYPES;
        this.orders = ORDERS;
        this.filter = new FormGroup({
            searchQuery: new FormControl('space'),
            imageType: new FormControl('photo'),
            order: new FormControl('popular')
        });

        this.filter.valueChanges
            .pipe(debounceTime(500))
            .subscribe((filter: Filter) => this.getImages());
    }

    ngOnInit() {
        this.getImages();
    }

    public onFilterSubmit(): void {
        this.getImages();
    }

    private getImages(): void {
        this.avocados$ = this.imageApiService.getImages(this.filter.value);
    }
}
