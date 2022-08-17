import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserapiService } from '../services/userapi.service';


@Component({
  providers: [AppComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isVisible = false;
  public viewChange = true;
  public status = 'Login';
  public failedlogin = true;
  public users:any;

  constructor(
    private router: Router,
    public comp:AppComponent,
    private api:UserapiService
    ) { }
  

  ngOnInit(): void {
    this.comp.viewUserList();
   
  }

  // login form input field validation
  loginForm = new FormGroup({
    'userName': new FormControl('',[Validators.required, Validators.pattern("^[A-Za-z][A-Za-z ]+$"), Validators.minLength(4)]),
    'password': new FormControl('',[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$")]),
    'type': new FormControl('',[Validators.required,]),
  })

  
  

  // function to authenticate login
  login() {
    for (let user of this.comp.user) {
      if ((this.loginForm.value.userName == user.username) || (this.loginForm.value.password == user.password)){
        if (this.loginForm.value.type == "MANAGER") {
          this.router.navigateByUrl("/manager/dashboard")
        }
        else if (this.loginForm.value.type == "EMPLOYEE") {
          this.router.navigateByUrl("/user/dashboard")
        }
        else {
          window.alert("Login Failed")
        }
      }
      else {
        window.alert("Login Failed")
      }
 

    }

    
      }
     

//    const userData = {
//      username :this.loginForm.value['userName'],
//      password : this.loginForm.value['password'],
//    }
//
//    this.api.loginUser(userData).subscribe((response)=>{
//      console.log(response);
//      alert('User' + this.loginForm.value['userName'] + 'logged')
//    })



get userName() {
  return this.loginForm.get('userName');
}
get password() {
  return this.loginForm.get('password')
}

get type() {
  return this.loginForm.get('type')
}

}


  
  

  


