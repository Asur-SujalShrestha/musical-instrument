import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, NavBarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName: string = ''; //this value is retrieve from frontend input field
  email: string= ''; 
  password: string = '';  
  confirmPassword: string = ''; 

  constructor(private router: Router){}


  onRegister() {
    if (this.password === this.confirmPassword) { //if password inputed value is equal to confirm password inputed create credentials object
      const credentials = {
        userName: this.userName, //asignvalue from global variable
        email: this.email,
        password: this.password
      };


      localStorage.setItem('userCredentials', JSON.stringify(credentials)); //local storage store (key,value) both string stringfy is used to convert into string
      alert('Registration successful!'); //message
      this.router.navigate(['/login']); //route
    } else {
      alert('Passwords do not match!');
    }
  }
}
