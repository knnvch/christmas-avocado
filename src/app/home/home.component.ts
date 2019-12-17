import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FEATURES_CONFIG } from '../shared/config/constants';
import { AppState } from '../shared/models';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public features: any[];

    constructor(private store: Store<AppState>) {
        this.features = FEATURES_CONFIG;
    }

    ngOnInit() {
    }

}
