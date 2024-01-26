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
    @Column(name="short_desc")
    private String shortDesc;
    @Column(name = "full_desc")
    private String fullDesc;
    @Column(name = "image_link")
    private String imageLink;
    @Column(name="category")
    private String category;
}
