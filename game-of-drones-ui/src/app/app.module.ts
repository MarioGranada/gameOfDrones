import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { GameScreenComponent } from './components/game-screen/game-screen.component';
import { GameOverScreenComponent } from './components/game-over-screen/game-over-screen.component';
import { StatisticsScreenComponent } from './components/statistics-screen/statistics-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterScreenComponent,
    GameScreenComponent,
    GameOverScreenComponent,
    StatisticsScreenComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
