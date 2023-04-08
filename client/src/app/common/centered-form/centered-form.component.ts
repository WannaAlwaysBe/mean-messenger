import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-centered-form',
  templateUrl: './centered-form.component.html',
  styleUrls: ['./centered-form.component.scss']
})
export class CenteredFormComponent {
  @Input() public formTitle: string;
}
