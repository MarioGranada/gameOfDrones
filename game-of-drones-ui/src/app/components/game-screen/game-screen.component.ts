import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GameOfDronesApiService } from 'src/app/shared/services/game-of-drones-api.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/shared/models/game';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {
  gameForm: FormGroup;
  currentGame = {
    playerOne: '',
    playerTwo: '',
    playerOneMove: '',
    playerTwoMove: '',
    avaiblableGameMoves: [],
    currentPlayer: '',
    currentRound: 1,
    rounds: [],
    winner: '',
    isGameOver: false,
    maxRounds: 5, // Increased to 5 in order to ensure there is a winner
    roundToWinGame: 3
  };

  constructor(
    private formBuilder: FormBuilder,
    private GoDApiService: GameOfDronesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAvailableMoves();
    this.getCurrentPlayers();
    this.createForm();
    this.currentGame.currentRound = 1; // First round
    this.currentGame.currentPlayer = this.currentGame.playerOne; // Player One default to be the first one to choose move.
  }

  get chosenMove() {
    return this.gameForm.get('moves');
  }

  createForm(): void {
    this.gameForm = this.formBuilder.group({
      moves: [{ value: '', disabled: false }, Validators.required]
    });
  }

  getAvailableMoves(): void {
    this.GoDApiService.getMoves().subscribe(
      moves => (this.currentGame.avaiblableGameMoves = moves)
    );
  }

  getCurrentPlayers(): void {
    this.route.params.subscribe(params => {
      this.currentGame.playerOne = params['playerOneName'];
      this.currentGame.playerTwo = params['playerTwoName'];
    });
  }

  runGame(): void {
    const selectedMove = this.chosenMove.value;

    if (selectedMove !== '') {
      if (this.currentGame.currentPlayer === this.currentGame.playerOne) {
        this.currentGame.playerOneMove = selectedMove;
      } else {
        this.currentGame.playerTwoMove = selectedMove;
        this.checkRoundWinner();
      }
      this.checkGameWinner();
      this.toggleCurrentPlayer();
    }

    if (this.currentGame.isGameOver) {
      this.storeGame();
    }
  }

  toggleCurrentPlayer(): void {
    this.currentGame.currentPlayer =
      this.currentGame.currentPlayer === this.currentGame.playerOne
        ? this.currentGame.playerTwo
        : this.currentGame.playerOne;
  }

  switchRound(): void {
    this.currentGame.currentRound++;
  }

  checkRoundWinner(): void {
    if (this.currentGame.playerOneMove !== this.currentGame.playerTwoMove) {
      const fullMovePlayerOne = this.currentGame.avaiblableGameMoves.find(
        item => {
          return item.name === this.currentGame.playerOneMove;
        }
      );

      const fullMovePlayerTwo = this.currentGame.avaiblableGameMoves.find(
        item => {
          return item.name === this.currentGame.playerTwoMove;
        }
      );

      const roundWinner =
        fullMovePlayerOne.beats === fullMovePlayerTwo.name
          ? this.currentGame.playerOne
          : this.currentGame.playerTwo;

      this.addRound(this.currentGame.currentRound, roundWinner);
      this.switchRound();
    }
  }

  addRound(roundNumber, winner): void {
    this.currentGame.rounds.push({
      winner: winner,
      number: roundNumber
    });
  }

  checkGameWinner(): void {
    if (this.currentGame.currentRound > this.currentGame.maxRounds) {
      let winnerOcurrences = this.currentGame.rounds.filter(
        item => item.winner === this.currentGame.playerOne
      ); // First attempt with player one, could be anyone.

      this.currentGame.winner =
        winnerOcurrences.length >= this.currentGame.roundToWinGame
          ? this.currentGame.playerOne
          : this.currentGame.playerTwo;
      this.currentGame.isGameOver = true;
    }
  }

  gameToServerShape(game: any): Game {
    return {
      winner: game.winner,
      rounds: game.rounds,
      players: [game.playerOne, game.playerTwo]
    } as Game;
  }

  storeGame(): void {
    const gameToServer = this.gameToServerShape(this.currentGame);
    this.GoDApiService.saveGame(gameToServer).subscribe(game => {
      console.log('stored game', game);
    });
  }

  storePlayers(): void {}
}
