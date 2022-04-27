import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userdata } from 'src/model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  currentUserId:string="";
  isLoading:boolean=true;
  userdata:userdata|any ={};
  
  constructor(private activatedRoute:ActivatedRoute,private userservice:UserService) {
     this.activatedRoute.params.subscribe((data)=>{
     this.currentUserId=data['id'];
     this.userservice.userbyid(this.currentUserId).subscribe((data) =>{
       this.userdata=data;
     })
  })
}
  ngOnInit(): void {
    
  }

}
