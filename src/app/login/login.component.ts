import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login.model';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginModel: LoginModel = new LoginModel();

  constructor(
    private http: HttpClient,
    private router: Router
  ){}



  login(){
    const formData = new FormData();
    formData.append("usernameoremail", this.loginModel.usernameoremail);
    formData.append("password", this.loginModel.password);

    this.http.post("https://localhost:7010/api/Auth/Login", formData).subscribe(res=> {
      localStorage.setItem("accessToken", JSON.stringify(res));
      this.router.navigateByUrl("/");
    });
  }
  
}
