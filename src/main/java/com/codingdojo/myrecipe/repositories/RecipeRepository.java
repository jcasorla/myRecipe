package com.codingdojo.myrecipe.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.myrecipe.models.Recipe;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Long>{}
