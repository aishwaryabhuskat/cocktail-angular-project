import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cocktail-description.component.html',
  styleUrl: './cocktail-description.component.scss'
})
export class CocktaildescriptionComponents {
  recipeId: string | null = '';
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private rService: RecipeService, private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.recipeId = params.get('cocktailId');
    });
    if (typeof this.recipeId === 'string') {
      this.rService.getRecipe(this.recipeId).subscribe(
        (res) => this.recipe = res,
        (err) => console.log(err)
      )
    } else {
      console.error('Invalid ID');
    }
  }

  // choose Favorite call
  markFavorite() {
    if (this.recipe) {
      if (this.favoriteService.isFavoriteCocktail(this.recipe.id)) {
        this.favoriteService.removeFavorite(this.recipe.id);
      } else {
        this.favoriteService.addFavorite(this.recipe.id);
      }
    }
  }

  // 
  isFavoriteCocktail(): boolean {
    return this.recipe ? this.favoriteService.isFavoriteCocktail(this.recipe.id) : false;
  }

}
