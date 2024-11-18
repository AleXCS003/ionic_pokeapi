import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage {
  pokemonName: string = '';
  pokemonData: any;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  searchPokemon() {
    if (this.pokemonName) {
      this.pokemonService.getPokemon(this.pokemonName).subscribe(data => {
        this.pokemonData = data;
      }, error => {
        console.log('Error fetching Pokémon data:', error);
      });
    }
  }
}
