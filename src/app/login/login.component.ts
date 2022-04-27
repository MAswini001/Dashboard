import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginform: FormGroup;
  constructor(private userservice:UserService,private router:Router) { 
  this.loginform=new FormGroup({
    'email':new FormControl(''),
    'password':new FormControl('')
  })
  }
  ngOnInit(): void {
  }
  login(){
    if(this.loginform.valid){
      this.userservice.login(this.loginform.value).subscribe((data) =>{
         console.log(data)
         window.localStorage.setItem("app_token",data.token)
         this.router.navigate(["/dashboard"])
      })
    }
  }

}
