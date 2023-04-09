import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

import {ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http";
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { UpdateComponent } from './update/update.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    CreateComponent,
    ArticlesComponent,
    ArticleComponent,
    UpdateComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
