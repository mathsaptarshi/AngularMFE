import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSignal = signal<{ name: string; email: string } | null>(
    JSON.parse(localStorage.getItem('mfe_user') || 'null')
  );

  isAuthenticated = computed(() => !!this.userSignal());
  currentUser = computed(() => this.userSignal());

  constructor(private router: Router) {}

  login(email: string, name = 'Saptarshi Biswas') {
    const user = { name, email };
    localStorage.setItem('mfe_user', JSON.stringify(user));
    this.userSignal.set(user);
    this.router.navigate(['/dashboard']);
  }

  signup(name: string, email: string) {
    this.login(email, name);
  }

  logout() {
    localStorage.removeItem('mfe_user');
    this.userSignal.set(null);
    this.router.navigate(['/login']);
  }
}