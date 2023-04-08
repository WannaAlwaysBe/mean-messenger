import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ControlError {
  text: string;
  condition: boolean;
}

@Component({
  selector: 'app-control-errors',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorsComponent {
  @Input() public submitted = false;
  @Input() public errorConfig: ControlError[] = [];
}
