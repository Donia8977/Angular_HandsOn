import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label =''
  @Output() clicked = new EventEmitter<void>();

}
