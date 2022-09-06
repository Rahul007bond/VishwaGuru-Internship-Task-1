import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public aloginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.aloginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  adminlogin(){
    this.http.get<any>("http://localhost:3000/admin").subscribe(res=>{
      const user= res.find((a:any)=>{
        return a.email===this.aloginForm.value.email && a.password===this.aloginForm.value.password
      });
      if(user){
        alert("success");
        this.aloginForm.reset();
        this.router.navigate(['admin']);
      }
      else{
        alert("Wrong email or password");
      }
    })
  }

}
