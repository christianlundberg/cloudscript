import { Component, Input } from '@angular/core';
import { NgxEditorModel } from 'ngx-monaco-editor';

const defaultOptions = {
    theme: 'vs-dark',
    automaticLayout: true
}

@Component({
    selector: 'editor',
    templateUrl: './editor.component.html'
})
export class EditorComponent{

    code: string;

    _options: any;

    constructor(){
        this._options = defaultOptions;
    }

    @Input() set options(options){
        this._options = {...defaultOptions, ...options};
    }

    get options(){
        return this._options;
    }
}