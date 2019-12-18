import { Component, OnInit } from '@angular/core';

import { FEATURES_CONFIG } from '../shared/config/constants';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public features: any[];

    constructor() {
        this.features = FEATURES_CONFIG;
    }

    ngOnInit() {
    }

}
