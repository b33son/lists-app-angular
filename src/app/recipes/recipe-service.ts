
import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Hamburger', 'Meat between two buns.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg', [new Ingredient("cheese", 1), new Ingredient("meat", 1), new Ingredient("bread", 2)]),
    new Recipe('Mac & Cheese', 'noodles and cheese.', 'https://images-gmi-pmc.edge-generalmills.com/c41ffe09-8520-4d29-9b4d-c1d63da3fae6.jpg', [new Ingredient("butter", 1), new Ingredient("noodle", 100), new Ingredient("cheese", 2)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();      // slice() returns a copy of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}