import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverScreenComponent } from './game-over-screen.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameOverScreenComponent', () => {
  let component: GameOverScreenComponent;
  let fixture: ComponentFixture<GameOverScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [GameOverScreenComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOverScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
