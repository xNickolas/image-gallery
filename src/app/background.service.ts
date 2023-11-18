// background.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private backgroundUrlSubject = new BehaviorSubject<string>('');

  setBackgroundUrl(url: string): void {
    this.backgroundUrlSubject.next(url);
  }

  getBackgroundUrl(): BehaviorSubject<string> {
    return this.backgroundUrlSubject;
  }
}
