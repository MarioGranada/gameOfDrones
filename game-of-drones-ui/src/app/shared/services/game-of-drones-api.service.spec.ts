import { TestBed } from '@angular/core/testing';

import { GameOfDronesApiService } from './game-of-drones-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('GameOfDronesApiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientModule] })
  );

  it('should be created', () => {
    const service: GameOfDronesApiService = TestBed.get(GameOfDronesApiService);
    expect(service).toBeTruthy();
  });
});
