import {Component, OnInit} from '@angular/core';
import {GlobalService} from 'app/services/global.service';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES = [];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    public menuItems: any;

    constructor(
        private globalService: GlobalService,
    ) {
        this.getMenus();
    }

    ngOnInit() {
        this.menuItems = {};
    }

    getMenus() {
        this.globalService
            .getMenu('user_menu_permissions')
            .subscribe((menus) => {
                this.menuItems = menus;
            });
    }
}
