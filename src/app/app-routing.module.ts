import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from './pokemon/pokemon.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PhotoPokemonComponent } from './photo-pokemon/photo-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'photo/:id',
    component: PhotoPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
