package com.example.laisuregameswebappbackend.repository;

import com.example.laisuregameswebappbackend.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepostitory extends JpaRepository<Game, Integer> {

}
