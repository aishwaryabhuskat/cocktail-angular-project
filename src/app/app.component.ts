import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, CocktailListComponent ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
}
