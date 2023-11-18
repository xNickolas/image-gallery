// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log('AuthGuard - canActivate');
    return this.authService.isLoggedIn().pipe(
      take(1),
      tap((loggedIn) => {
        console.log('AuthGuard - loggedIn:', loggedIn);
        if (!loggedIn) {
          console.log('AuthGuard - Redirecting to login...');
          this.router.navigate(['']); // Redirect to login if not logged in
        }
      })
    );
  }
}
