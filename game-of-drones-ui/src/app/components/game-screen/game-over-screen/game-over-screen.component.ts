import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-over-screen',
  templateUrl: './game-over-screen.component.html',
  styleUrls: ['./game-over-screen.component.scss']
})
export class GameOverScreenComponent implements OnInit {
  @Input() winner: string;
  @Input() isGameOver: boolean;

  constructor(private router: Router) {}

  ngOnInit() {}

  backToStart(): void {
    this.router.navigate(['/']);
  }
}
