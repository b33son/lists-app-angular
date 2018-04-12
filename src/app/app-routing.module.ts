/**
 * File: /Users/michaelbeeson/Documents/VSCode/angular-001/lists-pro/src/app/app-routing.module.ts
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  // #RecipesModule is the class name
  { path: 'recipes', loadChildren: './recipes/recipes-module#RecipesModule' },

  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
