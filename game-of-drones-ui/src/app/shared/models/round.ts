import { Player } from './player';
import { Game } from './game';

export class Round {
  number: string | number;
  players: Player[] | any;
  game: Game | string;
  winner: Player | string;
}
