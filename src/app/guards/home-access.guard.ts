import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeAccessGuard implements CanActivate {
  constructor(private router: Router) {}
  isUserLoggedIn!: boolean;

  isTokenSet(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }

  canActivate(): boolean {
    this.isTokenSet();

    if (this.isUserLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/auth/Login']);
      return false;
    }
  }
}
