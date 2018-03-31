//  app/app-routing.module.ts

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { FormPracticeComponent } from "./temp/form-practice/form-practice.component";

const appRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id/edit', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },

    ]
  },
  { path: 'form', component: FormPracticeComponent },
  { path: '', redirectTo: "/recipes", pathMatch: "full" },

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}