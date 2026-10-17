import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiServices } from '../services/api-services';

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
export class App implements OnInit{
  protected readonly title = signal('movie-list');
  private _apiService = inject(ApiServices);
  movies = signal<Movie[]|any>(null) 
  // movies: Movie[]|any = [
  //   { id: 1, title: 'Dune: Part Two', genre: 'Sci-Fi', language: 'English' },
  //   { id: 2, title: 'Kung Fu Panda 4', genre: 'Animation/Action', language: 'English' },
  //   { id: 3, title: 'Godzilla x Kong', genre: 'Action/Sci-Fi', language: 'English' },
  //   { id: 4, title: 'Oppenheimer', genre: 'Sci-Fi/Drama', language: 'English' }
  // ];

  constructor(){

  }

  ngOnInit(): void {
    this._apiService.getMovieList().subscribe((data)=>{
      this.movies.set(data)
      console.log("movies",this.movies)
    })
  }

  checkAvailability(movie: Movie) {
    console.log(`Checking tickets for: ${movie.title}`);
    const event = new CustomEvent('checkMovieTicketAvailability', { detail: movie });
    window.dispatchEvent(event);
  }
}
