import { Routes } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktaildescriptionComponents } from './cocktail-description/cocktail-description.component';

export const routes: Routes = [
    { path: '', component: CocktailListComponent, pathMatch:'full'},
    { path: 'cocktails/:cocktailId', component: CocktaildescriptionComponents },
];
