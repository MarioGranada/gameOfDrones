import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { Game } from '../models/game';
import { Round } from '../models/round';
import { Player } from '../models/player';
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
  private playersUrl = '/players';
  private singlePlayerUrl = '/player';

  constructor(private http: HttpClient) {}

  public getGames(): Observable<Game[]> {
    return of([]);
  }

  public saveGame(game: Game): Observable<any> {
    return this.http.post(this.baseUrl + this.gamesUrl, game, httpOptions);
  }

  public savePlayer(player: Player): Observable<any> {
    return of(null);
  }

  public getGameRounds(gameId): Observable<Round[]> {
    return of([]);
  }

  public getGamePlayers(gameId): Observable<Player[]> {
    return of([]);
  }

  public getPlayer(playerId): Observable<Player> {
    return of(null);
  }

  public getPlayerByName(playerName): Observable<Player> {
    return of(null);
  }

  public getMoves(): Observable<Move[]> {
    return of(Moves);
  }
}
