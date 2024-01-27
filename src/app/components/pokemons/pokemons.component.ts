import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit{

  pokemons = [
    { 'id': 1, 'nombre': 'Bulbasaur', 'categoria': 'grano', 'tipo': 'planta, venenosa',
    'talla': '', 'peso': 6.9, 'imagen': './assets/01.png' },
    { 'id': 2, 'nombre': 'Ivysaur', 'categoria': 'grano', 'tipo': 'planta, venenosa',
    'talla': '', 'peso': 13, 'imagen': './assets/02.png' },
    { 'id': 3, 'nombre': 'Venusaur', 'categoria': 'grano', 'tipo': 'planta, venenosa',
    'talla': 2, 'peso': '', 'imagen': './assets/03.png' },
    { 'id': 4, 'nombre': 'Charmander', 'categoria': 'lagarto', 'tipo': 'fuego',
    'talla': 0.6, 'peso': 8.5, 'imagen': './assets/04.png' },
    { 'id': 5, 'nombre': 'Charmaleon', 'categoria': 'llama', 'tipo': 'fuego',
    'talla': 1.1, 'peso': '', 'imagen': './assets/05.png' },
    { 'id': 6, 'nombre': 'Charizard', 'categoria': 'llama', 'tipo': 'fuego, vuelo',
    'talla': 1.7, 'peso': 90.5, 'imagen': './assets/06.png' }
  ];

  constructor() {}

  ngOnInit() {}
}



