import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from "src/app/shared/user.model";
import { UserService } from "src/app/shared/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user : User = new User();

 
 
  onSubmit() { 
   console.log(this.user);
   this.userService.register(this.user);

  }

  constructor(private userService: UserService) { }


  ngOnInit() {
  }






}
