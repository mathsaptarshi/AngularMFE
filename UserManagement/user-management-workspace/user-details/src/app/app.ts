import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  imports: [ CommonModule, RouterModule, Profile],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('user-details');

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);

  userId: string | null = null;
  user = signal<any>(null);

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>('/assets/data/users.json').subscribe({
      next: (users) => {
        const found = users.find((u) => u.id === Number(this.userId));
        this.user.set(found || null);
      },
      error: () => {
        this.user.set({
          id: this.userId,
          name: 'Fallback User',
          email: 'user@example.com',
          role: 'Lead Architect',
          department: 'Engineering',
          status: 'Active',
          location: 'Bengaluru, India',
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${this.userId}`
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['/user-list']);
  }

  receiveChildData(e:any){
    console.log("receiveChildData",e)
  }
  handleMessage(e: any) {
    console.log(e);
  }
}
