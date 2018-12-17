import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GameOfDronesApiService } from 'src/app/shared/services/game-of-drones-api.service';
import { Move } from 'src/app/shared/models/move';
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
    isGameOver: false
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
    const selectedMove = this.gameForm.get('moves').value;
    console.log(selectedMove);

    if (this.currentGame.currentPlayer === this.currentGame.playerOne) {
      this.currentGame.playerOneMove = selectedMove;
    } else {
      this.currentGame.playerTwoMove = selectedMove;
      this.checkRoundWinner();
    }
    this.checkGameWinner();
    this.toggleCurrentPlayer();
  }

  toggleCurrentPlayer(): void {
    this.currentGame.currentPlayer =
      this.currentGame.currentPlayer === this.currentGame.playerOne
        ? this.currentGame.playerTwo
        : this.currentGame.playerOne;

    console.log(this.currentGame.currentPlayer);
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

      console.log('round winner', roundWinner);

      this.addRound(this.currentGame.currentRound, roundWinner);
      this.switchRound();
    }
  }

  addRound(roundNumber, winner): void {
    this.currentGame.rounds.push({
      winner: winner,
      number: roundNumber,
      game: ''
    });
  }

  checkGameWinner(): void {
    if (this.currentGame.currentRound > 3) {
      console.log(this.currentGame.rounds);
      let winnerOcurrences = this.currentGame.rounds.filter(
        item => item.winner === this.currentGame.playerOne
      ); // First attempt with player one, could be anyone.
      console.log('ocurrences', winnerOcurrences);
      console.log('currentGame playerOne', this.currentGame.playerOne);
      this.currentGame.winner =
        winnerOcurrences.length >= 2
          ? this.currentGame.playerOne
          : this.currentGame.playerTwo;
      this.currentGame.isGameOver = true;
    }
  }
}
