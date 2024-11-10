import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Dummy authentication (replace with real authentication mechanism)
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/landing']);
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
