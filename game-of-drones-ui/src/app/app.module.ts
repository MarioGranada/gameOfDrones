import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { GameScreenComponent } from './components/game-screen/game-screen.component';
import { GameOverScreenComponent } from './components/game-screen/game-over-screen/game-over-screen.component';
import { StatisticsScreenComponent } from './components/statistics-screen/statistics-screen.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterScreenComponent,
    GameScreenComponent,
    GameOverScreenComponent,
    StatisticsScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
