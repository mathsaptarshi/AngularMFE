import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { inject } from '@angular/core';
import { AuthService } from './core/auth.service';

const authGuard = () => {
  const auth = inject(AuthService);
  if (!auth.isAuthenticated()) {
    auth.logout();
    return false;
  }
  return true;
};

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    resolve: {
      user: () => inject(AuthService).currentUser(),
    },
    loadComponent: () =>
      loadRemoteModule('dashboard', './Component').then((m) => m.App),
  },
  {
    path: 'user-list',
    canActivate: [authGuard],
    loadComponent: () =>
      loadRemoteModule('user-list', './Component').then((m) => m.App),
  },
  {
    path: 'users/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      loadRemoteModule('user-details', './Component').then((m) => m.App),
  },
  { path: '**', redirectTo: 'dashboard' }
];