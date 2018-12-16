import { TestBed } from '@angular/core/testing';

import { GameOfDronesApiService } from './game-of-drones-api.service';

describe('GameOfDronesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameOfDronesApiService = TestBed.get(GameOfDronesApiService);
    expect(service).toBeTruthy();
  });
});
