import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
  avatar: string;
  location: string;
}

@Component({
  imports: [NgFor],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('user-list');

  private http = inject(HttpClient);
  private router = inject(Router);
  users = signal<User[]>([]);

  ngOnInit() {
    this.http.get<User[]>('/assets/data/users.json').subscribe({
      next: (data) => this.users.set(data),
      error: () => {
        this.users.set([
          { id: 1, name: 'Arjun Sharma', email: 'arjun.sharma@example.com', role: 'Lead Architect', department: 'Engineering', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun', location: 'Bengaluru, India' },
          { id: 2, name: 'Priya Sen', email: 'priya.sen@example.com', role: 'Product Manager', department: 'Product', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya', location: 'Kolkata, India' }
        ]);
      }
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/users', id]);
  }
  editDetails(id: number) {
    console.log(id)
  }
}
