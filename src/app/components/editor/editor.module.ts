import { FormsModule } from '@angular/forms';
import { EditorComponent } from './editor.component';
import { NgModule } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor';

@NgModule({
    imports: [MonacoEditorModule, FormsModule],
    declarations: [EditorComponent],
    exports: [EditorComponent]
})
export class EditorModule{}