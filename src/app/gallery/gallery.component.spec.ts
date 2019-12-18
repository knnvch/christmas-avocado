import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { FILTER_FEATURE_KEY } from '../shared/config/constants';
import { reducer } from '../store/reducers/filter.reducer';
import { SharedModule } from '../shared/shared.module';

describe('GalleryComponent', () => {
    let component: GalleryComponent;
    let fixture: ComponentFixture<GalleryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GalleryComponent ],
            imports: [
                StoreModule.forRoot({}),
                StoreModule.forFeature(FILTER_FEATURE_KEY, reducer),
                SharedModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
