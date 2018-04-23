import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { WINDOW } from '../../services/window.service';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { HostListener } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { User } from '@firebase/auth-types';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    @Input() user: User;

    @Input() loaded: boolean;

    @Input() isLandingPage: boolean;

    @Output() signOut = new EventEmitter();

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

    onSignOut(){
        this.signOut.emit();
    }
}