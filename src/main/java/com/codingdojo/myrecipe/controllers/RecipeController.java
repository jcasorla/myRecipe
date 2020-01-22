package com.codingdojo.myrecipe.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.codingdojo.myrecipe.models.Recipe;
import com.codingdojo.myrecipe.repositories.RecipeRepository;


@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "*")
public class RecipeController {
	
	private final RecipeRepository recipeRepository;
	
	public RecipeController(RecipeRepository recipeRepository) {
		this.recipeRepository=recipeRepository;
		
	}
	
	//view all
	@GetMapping("/recs")
    public List<Recipe> getRecipies() {
        return (List<Recipe>) recipeRepository.findAll();
    }
	
	//view one
	@GetMapping("/recs/{id}")
	public Optional<Recipe> view(@PathVariable("id") Long id) {
		return  recipeRepository.findById(id);
	
	}
	
	//add
	@PostMapping("/recs")
    void addRecipe(@RequestBody Recipe recipe) {
        recipeRepository.save(recipe);
    }
	
	//update
	@RequestMapping(value="/recs/{id}", method=RequestMethod.PUT) 
    public void updateRecipe(@RequestBody Recipe recipe) {
    	recipeRepository.save(recipe);
	    
    }
	
	//delete
	@RequestMapping(value="/recs/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
      
        recipeRepository.deleteById(id);
    }

}
