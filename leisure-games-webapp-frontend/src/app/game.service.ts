import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseURL = "http://localhost:8080/game";

  constructor(private httpClient: HttpClient) { }

  getGamesList(): Observable<Game[]>{
    return this.httpClient.get<Game[]>(`${this.baseURL}`);
  }
}
