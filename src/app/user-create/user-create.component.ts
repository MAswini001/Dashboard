import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
 userFormData:any;
 isposting:boolean=false;
 
  constructor(private userService:UserService,private route:Router) { 
    
    this.userFormData=new FormGroup({
   'username':new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    'email':new FormControl("",[Validators.required,Validators.email]),
    'phoneno':new FormControl("", [Validators.required,Validators.min(9999999),Validators.max(9999999999)]),
    'countrycode':new FormControl(""),
    'country':new FormControl("IN"),
    'state':new FormControl("TN"),
    'city':new FormControl("CH"),
    'skills':new FormArray([
     new FormGroup({
       'skilname':new FormControl(),
       'rating':new FormControl()
      }),
     new FormGroup({
      'skilname':new FormControl(),
       'rating':new FormControl()
     })
    ])
    })
  }

  ngOnInit(): void {

  }
  postFormData(){
    if(this.userFormData.valid){
      this.isposting=true;
      this.userService.createUser(this.userFormData.value).subscribe((data)=>{
        this.isposting=false;
        this.route.navigate(["/dashboard/Users/list"])
      },(error)=>{
        this.isposting=true;
        alert("error")
      })
    }
  }

}
