import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule, 
        MatToolbarModule, 
        MatButtonModule, 
        FlexLayoutModule, 
        RouterModule,
        MatMenuModule,
        MatIconModule
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class NavbarModule { }