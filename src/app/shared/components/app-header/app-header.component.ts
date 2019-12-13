import { Component, OnInit } from '@angular/core';
import { FEATURES_CONFIG, HOME_ROUTER_LINK } from '../../config/constants';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
    public homeLink: string;
    public tabs: any[];

    constructor() {
        this.homeLink = HOME_ROUTER_LINK;
        this.tabs = FEATURES_CONFIG;
    }

    ngOnInit() {
    }

}
