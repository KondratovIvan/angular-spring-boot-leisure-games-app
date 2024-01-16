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
    @Column(name = "fame")
    private String fame;
    @Column(name="shortDesc")
    private String shortDesc;
    @Column(name = "fullDesc")
    private String fullDesc;
    @Column(name = "image_link")
    private String imageLink;
}
