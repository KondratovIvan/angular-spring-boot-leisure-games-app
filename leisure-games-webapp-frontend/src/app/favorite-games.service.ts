import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root',
})
export class FavoriteGamesService {
  private favoriteGames: Game[] = [];

  getFavoriteGames(): Game[] {
    return this.favoriteGames;
  }

  addToFavorites(game: Game): void {
    this.favoriteGames.push(game);
  }

  removeFromFavorites(game: Game): void {
    const index = this.favoriteGames.findIndex(favoriteGame => favoriteGame.id === game.id);
    if (index !== -1) {
      this.favoriteGames.splice(index, 1);
    }
  }
}
