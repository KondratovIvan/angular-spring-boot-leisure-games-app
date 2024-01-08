package com.example.laisuregameswebappbackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="game")
@Data
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name")
    private String name;
    @Column(name = "min_players_amount")
    private Integer minPlayersAmount;
    @Column(name = "description")
    private String description;
    @Column(name = "image_link")
    private String imageLink;
}
