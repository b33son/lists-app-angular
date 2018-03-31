// app/recipes/recipe-detail/recipe-detail.component.ts

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipes()[this.id];
      }

    );

  }

  toShoppingList() {
    //   need reference to shopping list service
    //  could either go directly to shopping list service or take an extra step through the recipe service
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // In HTML Absolute
    //  [routerLink]="['/recipes', id, 'edit']"    

    //Relative path
    //  this.router.navigate(["edit"], {relativeTo: this.activatedRoute});  

    //Relative path
    //  this.router.navigate(["../", this.id, "edit"], {relativeTo: this.activatedRoute}); 

    // Absolute path
    this.router.navigate(["/recipes", this.id, "edit"]);
  }
}
