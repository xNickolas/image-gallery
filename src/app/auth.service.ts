// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  login(username: string, password: string): void {
    // Add your authentication logic here
    // For simplicity, let's assume any non-empty values are valid
    const isValid = username.trim() !== '' && password.trim() !== '';
    this.isLoggedInSubject.next(isValid);
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn() {
    return this.isLoggedInSubject.asObservable().pipe(
      tap((value) => console.log('AuthService - isLoggedIn:', value))
    );
  }
}
