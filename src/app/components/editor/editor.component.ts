import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, forwardRef } from '@angular/core';
import { NgxEditorModel } from 'ngx-monaco-editor';

const defaultOptions = {
    theme: 'vs-dark',
    automaticLayout: true
}

@Component({
    selector: 'editor',
    templateUrl: './editor.component.html',
    providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => EditorComponent),
          multi: true
        }
    ]
})
export class EditorComponent implements ControlValueAccessor{

    value: string;

    _options: any;

    onChange: Function;

    onTouched: Function;

    constructor(){
        this._options = defaultOptions;
    }

    @Input() set options(options){
        this._options = {...defaultOptions, ...options};
    }

    get options(){
        return this._options;
    }

    update(value: string){
        this.onChange(value);
    }

    writeValue(value: string){
        this.value = value;
    }

    registerOnChange(onChange: Function){
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: Function){
        this.onTouched = onTouched;
    }
}