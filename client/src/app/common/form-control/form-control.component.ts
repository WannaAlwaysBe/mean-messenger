import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormControlName, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';

import { ControlError } from '../control-errors/control-errors.component';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormControlComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent implements ControlValueAccessor, OnInit {
  @Input() public submitted = true;
  @Input() public statusExtraCondition = true;
  @Input() public type = 'text';
  @Input() public placeholder: string = null;
  @Input() public errorConfig: ControlError[] = [];
  @Input() public label: string = null;

  public onChange = (value: string): void => {};
  public onTouched = (value: string): void => {};
  public state: string = null;
  public formControl: FormControl;

  constructor(
    private injector: Injector,
  ) { }

  public ngOnInit(): void {
    const ngControl = this.injector.get(NgControl);

    this.formControl = ngControl instanceof FormControlName ?
      this.injector.get(FormGroupDirective).getControl(ngControl) :
      this.formControl = (ngControl as FormControlDirective).form as FormControl;
  }

  public writeValue(value: string): void {
    this.state = value;
  }

  public onInput(value: string): void {
    this.onChange(value);
    this.onTouched(value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: (value: string) => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
  }
}
