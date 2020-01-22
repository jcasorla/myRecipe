import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';




const routes: Routes = [
  { path: 'recs', component: RecipeListComponent },
  { path: 'addrecs', component: RecipeFormComponent },
  { path: 'edit/:id', component: RecipeUpdateComponent },
  { path: 'view/:id', component: RecipeViewComponent },
  { path: '', pathMatch: 'full', redirectTo: 'recs' },
    //   // the ** will catch anything that did not match any of the above routes
    {  path: '**',  redirectTo: 'recs',  pathMatch: 'full',},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
