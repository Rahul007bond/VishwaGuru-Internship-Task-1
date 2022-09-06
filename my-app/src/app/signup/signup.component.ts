import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  allUser:any;
  isEdit=false;
  userObj={
    fname:'',
    mob:'',
    email:'',
    password:'',
    id:''}

  constructor(private commonService:CommonService,private router:Router) { }

  ngOnInit(): void {
  }
  addUser(formObj: any){
    
    this.commonService.createUser(formObj).subscribe((response)=>{
      alert("Success");
      this.router.navigate(['admin-login']);

    })
  }
}
