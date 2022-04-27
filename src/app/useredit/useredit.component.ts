import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{UserService}from '../user.service';
@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  userFormData: any;
  isposting: boolean = false;
  currentuserid: any;
  constructor(private activatedroute:ActivatedRoute,private userservice:UserService,private router:Router) {
    this.currentuserid=this.activatedroute.snapshot.params['id'];
    this.userFormData = new FormGroup({
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
        }),
       ])
       })
       this.userservice.userbyid(this.currentuserid).subscribe((data) =>{
       console.log(data)
       delete data.id;
       this.userFormData.setValue(data)
    
       })
   }

  ngOnInit(): void {}
    editFormData(){
      if(this.userFormData.valid){
        this.userservice.updateuserid(this.currentuserid,this.userFormData.value).subscribe((data) =>{
        this.router.navigate(['/dashboard/Users/list'])
        })
      }
    }
  

}
