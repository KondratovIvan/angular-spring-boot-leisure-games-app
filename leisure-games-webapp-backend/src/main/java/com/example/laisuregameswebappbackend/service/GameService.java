package com.example.laisuregameswebappbackend.service;

import com.example.laisuregameswebappbackend.model.Game;
import com.example.laisuregameswebappbackend.repository.GameRepostitory;
import com.example.laisuregameswebappbackend.util.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {
    private final GameRepostitory gameRepository;

    public GameService(GameRepostitory gameRepository) {
        this.gameRepository = gameRepository;
    }

    public Game create(Game game){
        return gameRepository.save(game);
    }

    public Game update(Integer id, Game game) throws ResourceNotFoundException{
        Game updatedGame= gameRepository.findById(id)
                .map(entity -> {
                    entity.setName(game.getName());
                    entity.setMinPlayersAmount(game.getMinPlayersAmount());
                    entity.setDescription(game.getDescription());
                    entity.setImageLink(game.getImageLink());
                    return gameRepository.save(entity);
                })
                .orElseThrow(ResourceNotFoundException::new);
        return updatedGame;
    }
    public Game getById(Integer id) throws ResourceNotFoundException {
        return gameRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    public List<Game> getAll(){
        return gameRepository.findAll();
    }

    public void removeById(Integer id){
        gameRepository.deleteById(id);
    }
}
