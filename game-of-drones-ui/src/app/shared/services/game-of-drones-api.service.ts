import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { Game } from '../models/game';
import { Move } from '../models/move';
import { Moves } from '../mocks/moves.mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GameOfDronesApiService {
  private baseUrl = 'http://localhost:3000';
  private gamesUrl = '/games';
  private singleGameUrl = '/game';

  constructor(private http: HttpClient) {}

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + this.gamesUrl);
  }

  public getSingleGame(gameId: string): Observable<Game> {
    return this.http.get<Game>(
      this.baseUrl + this.singleGameUrl + '/' + gameId,
      httpOptions
    );
  }

  public saveGame(game: Game): Observable<any> {
    return this.http.post(this.baseUrl + this.gamesUrl, game, httpOptions);
  }

  // TBD: Retrieve moves from API instead of mock
  public getMoves(): Observable<Move[]> {
    return of(Moves);
  }
}
