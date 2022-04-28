import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { userdata } from 'src/model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist:Observable<Array<userdata>> =this.userservice.userdata();
  now=new Date()
  constructor(private  userservice:UserService) { 
    
  }
  ngOnInit(): void {
    this.fetchdata()
    }
    fetchdata(){
      this.userservice.userdata().subscribe((data)=>{
    
   })
    }
  deleteuser(id:any){
   let confirmres=confirm("Are you sure do you want delete?")
    if(confirmres){
    this.userservice.deleteuserbyid(id).subscribe(()=>{
        this.fetchdata()
    })

      }
    }
  


  }
