import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { GameScreenComponent } from './components/game-screen/game-screen.component';
import { StatisticsScreenComponent } from './components/statistics-screen/statistics-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterScreenComponent },
  {
    path: 'game/:playerOneName/:playerTwoName',
    component: GameScreenComponent
  },
  { path: 'statistics', component: StatisticsScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
