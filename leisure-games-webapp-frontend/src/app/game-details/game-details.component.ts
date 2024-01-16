import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit{
  id!: number;
  game!: Game;
  constructor(private route: ActivatedRoute, private gameService: GameService){
    
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.game = new Game();
    this.gameService.getGameById(this.id).subscribe(data => {
      this.game=data;
    })
  }
}
