import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScreenComponent } from './game-screen.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
class ActivatedRouteStubService {
  private paramsSubject = new BehaviorSubject(this.testParams);
  private _testParams: {};

  params = this.paramsSubject.asObservable();

  get testParams() {
    return this._testParams;
  }
  set testParams(newParams: any) {
    this._testParams = newParams;
    this.paramsSubject.next(newParams);
  }
}

@Component({
  selector: 'app-game-over-screen',
  template: '<div *ngIf="isGameOver"><h1>{{winner}}</h1></div>'
})
export class GameOverScreenStubComponent implements OnInit {
  @Input() isGameOver: boolean;
  @Input() winner: string;

  ngOnInit() {}
}

describe('GameScreenComponent', () => {
  let component: GameScreenComponent;
  let fixture: ComponentFixture<GameScreenComponent>;
  let activatedRoute: ActivatedRouteStubService;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStubService();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [GameScreenComponent, GameOverScreenStubComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScreenComponent);
    activatedRoute.testParams = {
      playerOne: 'testPlayerOne',
      playerTwo: 'testPlayerTwo'
    };
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
