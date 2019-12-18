import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FILTER_FEATURE_KEY } from '../shared/config/constants';
import { reducer } from '../store/reducers/filter.reducer';

@NgModule({
    declarations: [GalleryComponent],
    imports: [
        StoreModule.forFeature(FILTER_FEATURE_KEY, reducer),
        CommonModule,
        GalleryRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class GalleryModule { }
