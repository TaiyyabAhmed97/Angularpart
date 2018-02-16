import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-racket',
  templateUrl: './racket.component.html',
  styleUrls: ['./racket.component.css']
})
export class RacketComponent {

  @Input('group')
  public racketForm: FormGroup;
}
