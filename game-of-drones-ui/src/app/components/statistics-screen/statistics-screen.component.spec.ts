import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsScreenComponent } from './statistics-screen.component';
import { HttpClientModule } from '@angular/common/http';

describe('StatisticsScreenComponent', () => {
  let component: StatisticsScreenComponent;
  let fixture: ComponentFixture<StatisticsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [StatisticsScreenComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
