import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { Highlight } from '../directives/highlight';

interface AuthenticatedUser {
  name: string;
  email: string;
}

@Component({
  imports: [ CommonModule, Highlight],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('dashboard');

  readonly user = input<AuthenticatedUser | null>(null);

  metrics = signal([
    { label: 'Total Users', value: '1,429', change: '+12.4%', positive: true },
    { label: 'Active Sessions', value: '384', change: '+5.2%', positive: true },
    { label: 'Error Rate', value: '0.04%', change: '-0.02%', positive: true },
    { label: 'Avg Latency', value: '42ms', change: '+3ms', positive: false }
  ]);
}
