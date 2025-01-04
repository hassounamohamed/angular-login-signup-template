import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, RouterModule,FormsModule,MatInputModule,MatButtonModule, RouterOutlet, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  onSubmit(form: any) {
    if (form.valid) {
      alert('Login successful!\n' + JSON.stringify(form.value, null, 2));
    } else {
      alert('Please fill in all required fields.');
    }
  }
}