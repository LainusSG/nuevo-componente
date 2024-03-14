import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-emergente',
  templateUrl: './emergente.component.html',
  styleUrl: './emergente.component.css'
})
export class EmergenteComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
