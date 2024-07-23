import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {RouterModule } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent{
    allList: Recipe[] = []
    cocktailList: Recipe[] = []

    searchControl: FormControl = new FormControl('');
    
    ngOnInit(): void {
      if(this.cocktailList.length == 0){
        this.rService.getAllRecipes().subscribe(
          (res) => this.allList = this.cocktailList = res,
          (err) => console.log(err)
        )
      }else{

      }
      this.searchControl.valueChanges.subscribe(searchTerm => {
        if (searchTerm) {
          this.cocktailList = this.allList.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          this.cocktailList = [...this.allList];
        }
      });
    }

    constructor(private rService: RecipeService, private favoriteService: FavoriteService) {}

    markFavorite(cocktailId: string) {
      if (this.favoriteService.isFavoriteCocktail(cocktailId)) {
        this.favoriteService.removeFavorite(cocktailId);
      } else {
        this.favoriteService.addFavorite(cocktailId);
      }
    }
  
    isFavoriteCocktail(cocktailId: string): boolean {
      return this.favoriteService.isFavoriteCocktail(cocktailId);
    }

}
