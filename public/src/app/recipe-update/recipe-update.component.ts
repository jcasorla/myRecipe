import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.css']
})
export class RecipeUpdateComponent{

  recipe: Recipe;
  // editRecipe: any = {};
 
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
      this.findUser(id);
  });
  }
 

  findUser(id) {
    console.log(id);
    const observable = this.recipeService.getRecipe(id);
    observable.subscribe(data => {
      console.log(data);
      this.recipe = data;
    });
  }
 
  gotoUserList() {
    this.router.navigate(['/recs']);
  }

  onSubmit() {
    
    this.recipeService.updateRecipe(this.recipe).subscribe({
      next: (data)=>{
        this.gotoUserList();
      
      },
        error: error => {
          console.log(error);
          // this.errors=error.error;
  
      }
      
    });
  }

}
