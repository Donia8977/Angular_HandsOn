import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-body',
  imports: [ButtonComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  count = 0

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }

}
