import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IMAGE_TYPES, ORDERS } from '../shared/config/constants';
import { FilterSelect, Avocado, Filter } from '../shared/models';
import { ImageApiService } from './services/image-api.service';
import { setFilter } from '../store/actions/filter.actions';

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    public avocados: Avocado[] = [];
    public filter: FormGroup;
    public imageTypes: FilterSelect[];
    public orders: FilterSelect[];

    constructor(
        private imageApiService: ImageApiService,
        private store: Store<Filter>
    ) {
        this.avocados = [];
        this.imageTypes = IMAGE_TYPES;
        this.orders = ORDERS;
        this.filter = new FormGroup({
            searchQuery: new FormControl('avocado'),
            imageType: new FormControl('all'),
            order: new FormControl('popular')
        });
    }

    ngOnInit() {
        this.getImages();
    }

    public onFilterSubmit(): void {
        // this.store.dispatch(setFilter(this.filter.value));
        this.getImages();
    }

    private getImages(): void {
        this.imageApiService.getImages(this.filter.value)
            .subscribe((data: any) => {
                this.avocados = data.hits;
            });
    }
}
