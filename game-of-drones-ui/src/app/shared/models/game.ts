import { Player } from '@angular/core/src/render3/interfaces/player';
import { Round } from './round';

export class Game {
  rounds: Round[] | any;
  winner: Player | string;
  players: Player[] | any;
}
