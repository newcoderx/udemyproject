import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipe = new Recipe('dummy','dummy1','https://static.turbosquid.com/Preview/2018/12/21__04_12_23/CrashTestDummySittingPosture3dsmodel000.jpg74E61442-763F-4C98-A658-646BC207DAC4Large.jpg');

  constructor() { }

  ngOnInit() {
  }

}
