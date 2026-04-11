import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface Movie {
  id: number;
  title: string;
  genre: string;
  language: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie-list');

  movies: Movie[] = [
    { id: 1, title: 'Dune: Part Two', genre: 'Sci-Fi', language: 'English' },
    { id: 2, title: 'Kung Fu Panda 4', genre: 'Animation/Action', language: 'English' },
    { id: 3, title: 'Godzilla x Kong', genre: 'Action/Sci-Fi', language: 'English' },
    { id: 4, title: 'Oppenheimer', genre: 'Sci-Fi/Drama', language: 'English' }
  ];

  checkAvailability(movie: Movie) {
    console.log(`Checking tickets for: ${movie.title}`);
    const event = new CustomEvent('checkTicketAvailability', { detail: movie });
    window.dispatchEvent(event);
  }
}
