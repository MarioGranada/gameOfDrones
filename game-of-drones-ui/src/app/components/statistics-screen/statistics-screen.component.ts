import { Component, OnInit } from '@angular/core';
import { GameOfDronesApiService } from 'src/app/shared/services/game-of-drones-api.service';
import { Game } from 'src/app/shared/models/game';

@Component({
  selector: 'app-statistics-screen',
  templateUrl: './statistics-screen.component.html',
  styleUrls: ['./statistics-screen.component.scss']
})
export class StatisticsScreenComponent implements OnInit {
  games: Game[];
  filteredGames: Game[];
  filteredQuery: string;
  filteredWinner: string;

  constructor(private GoDApiService: GameOfDronesApiService) {}

  ngOnInit() {
    this.getAllGames();
  }

  getAllGames(): void {
    this.GoDApiService.getGames().subscribe(games => {
      this.games = games;
      this.recreateFullGames();
    });
  }

  recreateFullGames() {
    this.filteredGames = Object.assign([], this.games);
    this.filteredQuery = '';
  }

  filterByName(value): void {
    if (!value) {
      this.recreateFullGames();
      return;
    }
    this.filteredGames = Object.assign([], this.games).filter(
      item => item.winner.toLowerCase() === value.trim().toLowerCase()
    );
    this.filteredQuery = value;
  }
}
