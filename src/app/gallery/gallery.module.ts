import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [GalleryComponent],
    imports: [
        CommonModule,
        GalleryRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class GalleryModule { }
