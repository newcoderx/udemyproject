import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styles: []
})
export class ShoppinglistComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
