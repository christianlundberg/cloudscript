import { RouterModule } from '@angular/router';
import { LandingPageViewComponent } from './landing-page-view.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogModule } from '../../components/project-dialog/project-dialog.module';

@NgModule({
    imports: [ProjectDialogModule, MatDialogModule, FlexLayoutModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule],
    declarations: [LandingPageViewComponent],
    exports: [LandingPageViewComponent]
})
export class LandingPageViewModule { }