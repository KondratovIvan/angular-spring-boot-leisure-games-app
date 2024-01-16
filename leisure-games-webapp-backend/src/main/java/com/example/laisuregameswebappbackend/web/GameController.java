package com.example.laisuregameswebappbackend.web;

import com.example.laisuregameswebappbackend.model.Game;
import com.example.laisuregameswebappbackend.service.GameService;
import com.example.laisuregameswebappbackend.util.ResourceNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/game")
@CrossOrigin(origins = "http://localhost:4200")
public class GameController {
    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping
    public Game saveGame(@RequestBody Game game) {
        return gameService.create(game);
    }

    @PutMapping("{id}")
    public Game updateGame(@PathVariable Integer id, @RequestBody Game game) throws ResourceNotFoundException {
        return gameService.update(id, game);
    }

    @GetMapping
    public List<Game> getAllGames() {
        return gameService.getAll();
    }

    @GetMapping("{id}")
    public Game getGameById(@PathVariable Integer id) throws ResourceNotFoundException {
        return gameService.getById(id);
    }

    @DeleteMapping("{id}")
    public void deleteGameById(@PathVariable Integer id) {
        gameService.removeById(id);
    }
}
