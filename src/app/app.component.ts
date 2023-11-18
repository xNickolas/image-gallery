import { Component, OnInit } from '@angular/core';
import { BackgroundService } from './services/background.service';
import { Router } from '@angular/router';
import { AuthService } from './services//auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private backgroundService: BackgroundService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.backgroundService.getBackgroundUrl().subscribe((url) => {
      if (url) {
        document.documentElement.style.setProperty('--app-background', `url(${url})`);
      }
    });

    // Redirect to photo-list if the user is already logged in
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['/photo-list']);
      }
    });
  }
}
