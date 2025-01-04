import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule,RouterModule, RouterOutlet,CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.com$';
  onSubmit(form:any){
    if(form.valid){
      alert('Form submitted successuflyy!\n' + JSON.stringify(form.value, null, 2))
    }else {
      
      alert('Form is invalid. Please correct the errors and try again.');
    }
  }
}
