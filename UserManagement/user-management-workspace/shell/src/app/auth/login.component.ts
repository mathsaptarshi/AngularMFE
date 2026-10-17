import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="auth-card">
      <h2>Welcome Back</h2>
      <p class="subtitle">Log in to access your shell and remote portals</p>
      <form (submit)="onLogin()">
        <label>Email</label>
        <input type="email" [(ngModel)]="email" name="email" required placeholder="admin@example.com" />
        <label>Password</label>
        <input type="password" [(ngModel)]="password" name="password" required placeholder="••••••••" />
        <button type="submit" class="btn-primary">Sign In</button>
      </form>
      <p class="footnote">Don't have an account? <a routerLink="/signup">Sign up</a></p>
    </div>
  `,
  styles: [`
    .auth-card { max-width: 380px; margin: 4rem auto; padding: 2rem; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    h2 { margin: 0 0 0.25rem 0; color: #0f172a; font-size: 1.5rem; }
    .subtitle { color: #64748b; font-size: 0.85rem; margin-bottom: 1.5rem; }
    label { display: block; font-size: 0.8rem; font-weight: 600; color: #334155; margin-bottom: 0.3rem; }
    input { width: 100%; box-sizing: border-box; padding: 0.65rem; border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 1rem; }
    .btn-primary { width: 100%; padding: 0.75rem; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; }
    .btn-primary:hover { background: #1d4ed8; }
    .footnote { text-align: center; margin-top: 1.25rem; font-size: 0.85rem; color: #64748b; }
    .footnote a { color: #2563eb; text-decoration: none; font-weight: 600; }
  `]
})
export class LoginComponent {
  auth = inject(AuthService);
  email = 'saptarshi@example.com';
  password = 'password123';

  onLogin() {
    if (this.email) {
      this.auth.login(this.email);
    }
  }
}