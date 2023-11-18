// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = ''; // Add error message variable

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // Check if username and password are not empty
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.errorMessage = 'Please fill in both username and password.';
      return;
    }

    // Clear previous error message if any
    this.errorMessage = '';

    // Perform login
    this.authService.login(this.username, this.password);

    // Redirect to photo-list after successful login
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['/photo-list']);
      }
    });
  }
}
