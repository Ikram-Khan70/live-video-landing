import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrl: './token.component.css'
})
export class TokenComponent {
  username: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'Uvz7G50stCikXzWUwS92FadLF3JZl5QapZ5r3x1Q5wWOBHeO3OeX3EvGdkRE35DL') {
      this.router.navigate(['/landing']);
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
