import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public signUpform!:FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signUpform=this.formBuilder.group({
      fname:[''],
      email:[''],
      mob:[''],
      password:['']
    })
  }
  register(){
    this.http.post<any>("http://localhost:3000/users",this.signUpform.value)
    .subscribe(res=>{
      alert("Success");
      this.signUpform.reset();
      this.router.navigate(['login']);
    })
  }

}
