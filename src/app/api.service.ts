import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://www.omdbapi.com';

  constructor(private httpClient: HttpClient) { }

  public getMovieByName(name: string){
    return this.httpClient.get(`${this.apiURL}/?s=${name}&apikey=bcd58e90`);
  }

  public getMovieById(id: string){
    return this.httpClient.get(`${this.apiURL}/?i=${id}&apikey=bcd58e90`);
  }
}
