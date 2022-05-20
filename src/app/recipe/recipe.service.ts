import { EventEmitter } from "@angular/core";
import { Ingredient } from "app/shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

  constructor() {

  }

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Sehr lecker',
      'https://images.lecker.de/,id=4bee047c,b=lecker,w=610,cg=c.jpg',
      [new Ingredient('Pommes',10), new Ingredient('Schnitzel',1)]
      ),
      new Recipe('Salat','Auch lecker','https://images.lecker.de/,id=4dba2952,b=lecker,w=610,cg=c.jpg', [])];

      recipeSelected = new EventEmitter<Recipe>();

 getRecipes(){
   return this.recipes;
 }
}
