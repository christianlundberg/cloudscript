import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, FlexLayoutModule, RouterModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class NavbarModule { }