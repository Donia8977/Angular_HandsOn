import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { StudentFormComponent } from './student-form/student-form.component';
import { AddUserComponent } from './add-user/add-user.component';
    


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BodyComponent , StudentFormComponent , AddUserComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inc-dec';
}
