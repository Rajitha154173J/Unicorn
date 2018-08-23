import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from "src/app/shared/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user : User = new User();
  constructor() { }

  ngOnInit() {
  }


resetForm(form?: NgForm){
  if (form!=null)
    form.reset();
  this.user ={
    UserName:"",
    Password:"",
    FirstName:"",
    LastName:""
  }
}

onSubmit()
{
  console.log("Rajitha Sanjayamal");
}
}
