import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Sehr lecker',
      'https://images.lecker.de/,id=4bee047c,b=lecker,w=610,cg=c.jpg',
      [new Ingredient('Pommes',10), new Ingredient('Schnitzel',1)]
      ),
      new Recipe('Salat','Auch lecker','https://images.lecker.de/,id=4dba2952,b=lecker,w=610,cg=c.jpg', [])]
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
