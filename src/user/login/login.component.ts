import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule, NavBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string = ''; 
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    const storedCredentials = localStorage.getItem('userCredentials'); //getting all obejct assign to userCredentials 
    if (storedCredentials) {
      const credentials = JSON.parse(storedCredentials);
      if (credentials.userName === this.userName && credentials.password === this.password) {
        alert('Login successful!');
        this.router.navigate(['/']);
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('No registered users found');
    }
  }
}
