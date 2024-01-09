import { Component, OnInit } from '@angular/core';
import { Game } from '../game'
import { GameService } from '../game.service'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit{

  games: Game[]= [];
  
  constructor(private gameService: GameService){}

  ngOnInit(): void{
    // this.games=[{
    //   "id":1,
    //   "name":"testGame",
    //   "minPlayersAmount":3,
    //   "description":"testDesc",
    //   "imageLink":"testLink"
    // },
    // {
    //   "id":2,
    //   "name":"testGame",
    //   "minPlayersAmount":3,
    //   "description":"testDesc",
    //   "imageLink":"testLink"
    // }]
    this.getGames();
  }

  private getGames(){
    this.gameService.getGamesList().subscribe(data => {
      this.games=data;
    },
    error => {
      console.error('Произошла ошибка при получении данных:', error);
    });
  }
}
