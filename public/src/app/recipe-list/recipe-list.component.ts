import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe[];
 
  constructor(private recipeService: HttpService) {
  }
 
  ngOnInit() {
    this.getall();
    
  }
  getall(){
    this.recipeService.findAll().subscribe(data => {
      this.recipe = data;
    });
    console.log("in get all");
  }

  delete(recipe: Number): void { 
   
    this.recipeService.deleteRecipe(recipe).subscribe((recipe)=>{
      console.log("I am in delete: ", recipe);
      this.getall();
    });
    
  }

}
