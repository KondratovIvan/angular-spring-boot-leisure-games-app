import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [
  {path: 'games', component: GameListComponent},
  {path: '', redirectTo:'games', pathMatch:'full'},
  {path: 'game-details/:id', component: GameDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
