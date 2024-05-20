import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        canActivate: [()=>inject(AuthService).isAuthenticated()]

    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    }
];