import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { FavoriteGamesService } from '../favorite-games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];
  filteredGames: Game[] = [];
  selectedCategory: string = 'nothing';

  constructor(private gameService: GameService, private favoriteGamesService: FavoriteGamesService, private router: Router) {}

  ngOnInit(): void {
    this.getGames();
  }

  private getGames() {
    this.gameService.getGamesList().subscribe(data => {
      this.games = data;
      this.filteredGames = [...this.games];
    },
    error => {
      console.error('An error occurred while receiving data:', error);
    });
  }

  onRadioChange(event: Event) {
    const radio: HTMLInputElement = event.target as HTMLInputElement;
    this.selectedCategory = radio.value;
    this.filterGames();
  }

  filterGames() {
    if (this.selectedCategory === 'nothing') {
      this.filteredGames = [...this.games];
    } else {
      this.filteredGames = this.games.filter(game => game.category === this.selectedCategory);
    }
  }

  gameDetails(id: number) {
    this.router.navigate(['game-details', id]);
  }

  addToFavorites(game: Game) {
    this.favoriteGamesService.addToFavorites(game);
  }

  isInFavorites(game: Game): boolean {
    return this.favoriteGamesService.getFavoriteGames().some(favoriteGame => favoriteGame.id === game.id);
  }

  removeFromFavorites(game: Game) {
    if (this.isInFavorites(game)) {
      this.favoriteGamesService.removeFromFavorites(game);
      this.filteredGames = this.filteredGames.filter(g => !this.isInFavorites(g));
    }
  }

  toggleFavorites(game: Game) {
    if (this.isInFavorites(game)) {
      this.removeFromFavorites(game);
    } else {
      this.addToFavorites(game);
    }
  }
}
