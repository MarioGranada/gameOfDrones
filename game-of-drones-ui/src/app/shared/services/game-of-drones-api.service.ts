import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { Game } from '../models/game';
import { Round } from '../models/round';
import { Player } from '../models/player';
import { Move } from '../models/move';
import { Moves } from '../mocks/moves.mock';

@Injectable({
  providedIn: 'root'
})
export class GameOfDronesApiService {
  constructor() {}

  public getGames(): Observable<Game[]> {
    return of([]);
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
