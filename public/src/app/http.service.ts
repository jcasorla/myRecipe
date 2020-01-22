import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Recipe } from './model/recipe';
// import { Observable } from 'rxjs/Observable';
import {Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private recipeURL: string;

  constructor(private _http: HttpClient){
    
	  this.recipeURL="http://localhost:8080/recs";
    
}
public findAll(): Observable<Recipe[]> {
  return this._http.get<Recipe[]>(this.recipeURL);
}

public save(recipe: Recipe) {
  return this._http.post<Recipe>(this.recipeURL, recipe);
}

updateRecipe(data) {
  return this._http.put(this.recipeURL+ "/" + data.id, data);
}

deleteRecipe(recipe) {
  console.log(recipe.id);
  return this._http.delete(this.recipeURL + '/'  +recipe.id);
}
getRecipe(id) {
  console.log("in service " + id);
  return this._http.get<Recipe>(this.recipeURL + '/' + id);
}






}



