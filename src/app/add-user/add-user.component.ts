import { Component } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-user',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {


  firstname   = '';
  secondname  = '';
  displayname = '';

  formDetails = {
    firstname:   '',
    secondname:  '',
    displayname: ''
  };

  onFirstNameChange(value: string) {
    this.firstname               = value;
    this.displayname             = value;          
    this.formDetails.firstname   = value;          
    this.formDetails.displayname = '';             
  }

  onSecondNameChange(value: string) {
    this.secondname               = value;
    this.formDetails.secondname   = value;         
  }

  onDisplayNameSpace(event: KeyboardEvent) {
    
    if (event.key === ' ') {

      this.formDetails.displayname = this.displayname.trim();
    }
  }

    onDisplayNameKeydown(event: KeyboardEvent) {
   
    if (event.key !== ' ') {
      return;
    }

    const input = event.target as HTMLInputElement;

    if (input.selectionStart === input.value.length) {
     
      this.formDetails.displayname = input.value.trim();
    }
  }

}
