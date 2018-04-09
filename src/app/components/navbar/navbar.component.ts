import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { WINDOW } from '../../services/window.service';
import { Component, Inject, Input } from '@angular/core';
import { HostListener } from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    @Input() isLandingPage: boolean;

    isFixed: boolean;

    constructor( @Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window) {}

    @HostListener("window:scroll", [])
    onWindowScroll() {
        const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

        if (number > 20)
            this.isFixed = true;
        else if (number < 20)
            this.isFixed = false;
    }
}