import { Pokemon } from './../shared/pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from './../services/data-service.service';

@Component({
  selector: 'app-photo-pokemon',
  templateUrl: './photo-pokemon.component.html',
  styleUrls: ['./photo-pokemon.component.scss']
})
export class PhotoPokemonComponent implements OnInit {

  id: string;
  pokemonName: string;
  types1: Array<string> = [];
  types2: Array<string> = [];
  moves1: Array<string> = [];
  moves2: Array<string> = [];
  img: string;

  constructor(private route: ActivatedRoute, private data: DataServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.id = params['id']);
    this.getName();
    this.getTypes();
    this.getAbilities();
    this.frontImg();
    this.setParametersNull();
  }

  //Function that get the name from the API using a service
  getName() {
    this.data.getPokemonImages(this.id).subscribe(data => this.pokemonName = (data["forms"][0].name));
  }

  //Function that get the types from the API using a service
  getTypes() {
    this.data.getPokemonImages(this.id).subscribe(data => this.types1.push(data["types"][0]["type"].name));
    this.data.getPokemonImages(this.id).subscribe(data => this.types2.push(data["types"][1]["type"].name));
  }

  //Function that get the habilities from the API using a service
  getAbilities() {
    this.data.getPokemonImages(this.id).subscribe(data => this.moves1.push(data["moves"][0]["move"].name));
    this.data.getPokemonImages(this.id).subscribe(data => this.moves2.push(data["moves"][1]["move"].name));
  }

  //Function that set all Arrays to "clean"
  setParametersNull(){
    this.moves1 = [];
    this.moves2 = [];
    this.types1 = [];
    this.types2 = [];
  }

  //Function that set the front image of the pokemon to the img var of the component
  frontImg(){
    this.img =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id +".png"
  }

  //Function that set the back image of the pokemon to the img var of the component
  backImag(){
    this.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + this.id + ".png"
  }

}
