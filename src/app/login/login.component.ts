import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from "src/app/shared/login";
import { LoginService } from "src/app/shared/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : Login = new Login();
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }


  loginUser(){
    debugger;
    this.loginService.getConfig().subscribe(
      configurations=>{
        console.log("got the configurations: ",configurations);
        this.loginService.login(configurations["heroesUrl"],this.login).subscribe(
          result=>{
            console.log("the result :",result);
          }
        )
      }
    );
  }
}
