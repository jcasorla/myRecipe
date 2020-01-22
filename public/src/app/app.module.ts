import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';


// import { CakeComponent } from './cake/cake.component'; // <-- import FormsModule.


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeFormComponent,
    RecipeUpdateComponent,
    RecipeViewComponent,
    // CakeComponent
  ],
  providers: [
    HttpService
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- register FormsModule with our app.
    HttpClientModule,
    AppRoutingModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
