import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  recipe: Recipe;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private recipeService: HttpService) {
    this.recipe = new Recipe();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params['id'])
      let id=params['id'];
      
      this.findRecipe(id);
  });
  }
 
 

  findRecipe(id) {
    console.log(id);
    const observable = this.recipeService.getRecipe(id);
    observable.subscribe(data => {
      console.log(data);
      this.recipe = data;
    });
  }
 
  gotoRecipeList() {
    this.router.navigate(['/recs']);
  }
  delete(recipe: Number): void { 
   
    this.recipeService.deleteRecipe(recipe).subscribe((recipe)=>{
      console.log("I am in delete: ", recipe);
      this.router.navigateByUrl('/recs');
    });
    
  }

  
  

}
