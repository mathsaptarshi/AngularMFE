import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('ticket-availability');
  movieDetails = signal<any>({})
  ngOnInit(): void {
    window.addEventListener('checkMovieTicketAvailability', (event: Event)=>{
      const customEvent = event as CustomEvent;
      console.log(customEvent?.detail)
      this.movieDetails.set(customEvent?.detail)
    })
  }

  checkAvailability(){

  }
}
