import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from 'src/app/constants/models/login-view-model';
import { LoginService } from 'src/app/constants/services/login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginViewModel: LoginViewModel = new LoginViewModel();
  loginMessage: string = "";

  constructor(private loginService: LoginService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  onLoginClick(event: Event){
    console.log(this.loginViewModel)
    this.loginService.login(this.loginViewModel).subscribe({
      next: (res) => {
        this.router.navigateByUrl("admin/dashboard")
      }, 
      error: (err) => {
        console.error(err, "This is an error")
        this.loginMessage = "Invalid Username or Password";
      },
      complete: () => {
        this.loginMessage = "Login Successful";
      }
    })
  }


}
