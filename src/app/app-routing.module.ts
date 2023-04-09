import {Routes , RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CreateComponent } from "./create/create.component";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleComponent } from "./article/article.component";
import { UpdateComponent } from "./update/update.component";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

import { AuthGuardGuard } from "./services/auth-guard.guard";

const routes : Routes = [
    {path : "" , redirectTo : "landing" , pathMatch : "full"},
    {path : "landing" , component : LandingComponent},
    {path : "home" , component : HomeComponent , canActivate : [AuthGuardGuard]},
    {path : "login" , component : LoginComponent},
    {path : "signup" , component : SignupComponent},
    {path : "create" , component : CreateComponent , canActivate : [AuthGuardGuard]},
    {path : "articles" , component : ArticlesComponent , canActivate : [AuthGuardGuard]},
    {path : "article/:id" , component : ArticleComponent},
    {path : "update/:id" , component : UpdateComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
}
)

export class AppRoutingModule{}