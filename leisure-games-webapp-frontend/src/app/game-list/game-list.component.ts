import { Component, OnInit } from '@angular/core';
import { Game } from '../game'
import { GameService } from '../game.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit{

  games: Game[]= [];
  
  constructor(private gameService: GameService,  private router: Router){}

  ngOnInit(): void{ 
    this.getGames();
  }

  private getGames(){
    this.gameService.getGamesList().subscribe(data => {
      this.games=data;
    },
    error => {
      console.error('An error occurred while receiving data:', error);
    });
  }

  gameDetails(id: number){
    this.router.navigate(['game-details', id]);
  }

}
