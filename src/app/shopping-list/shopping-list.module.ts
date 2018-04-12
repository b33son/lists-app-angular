/**
 * File: /Users/michaelbeeson/Documents/VSCode/angular-001/lists-pro/src/app/shopping-list/shopping-list.module.ts
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class ShoppingListModule { }