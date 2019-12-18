import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ImageApiService } from './image-api.service';

describe('ImageApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ]
    }));

    it('should be created', () => {
        const service: ImageApiService = TestBed.get(ImageApiService);
        expect(service).toBeTruthy();
    });
});
