import { Component, OnInit } from '@angular/core';
import { FavoriteGamesService } from '../favorite-games.service';  
import { Game } from '../game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-favorites',
  templateUrl: './game-favorites.component.html',
  styleUrls: ['./game-favorites.component.css']
})
export class GameFavoritesComponent implements OnInit {
  favoriteGames: Game[] = [];

  constructor(private favoriteGamesService: FavoriteGamesService, private router: Router) {}

  ngOnInit(): void {
    this.favoriteGames = this.favoriteGamesService.getFavoriteGames();
  }

  gameDetails(id: number){
    this.router.navigate(['game-details', id]);
  }

  removeFromFavorites(game: Game) {
    this.favoriteGamesService.removeFromFavorites(game);
    this.favoriteGames = this.favoriteGamesService.getFavoriteGames();
  }

}