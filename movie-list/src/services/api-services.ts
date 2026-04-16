import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  _http = inject(HttpClient)
  constructor(){

  }

  getMovieList(){
    return this._http.get("http://localhost:4201/movieList.json");
  }
}
