import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allUser:any;
  isEdit=false;
  userObj={
    fname:'',
    mob:'',
    email:'',
    password:'',
    id:''

}
searchobj={
  squery:['']

}
  constructor(private commonService:CommonService){}
  ngOnInit(){
    this.getLatestUser()
  }
  addUser(formObj: any){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((response)=>{
console.log("Added success");
this.getLatestUser();
    })
  }
  getLatestUser() {
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser=response;
    })
  }
  getsearch(query: any) { console.log(query);
    this.commonService.getsearchq(query).subscribe((response)=>{
      this.allUser=response;
     
    })
  }
deleteUser(user:any){
  this.commonService.deleteUser(user).subscribe(()=>
 { this.getLatestUser();}
  )
}
editUser(user:any){
  this.isEdit=true;
  this.userObj=user;
}
updateUser(){
  this.isEdit=!this.isEdit;
  this.commonService.updateUser(this.userObj).subscribe(()=>
  {
    this.getLatestUser();
  })
}
}
