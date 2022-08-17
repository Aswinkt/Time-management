import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../services/userapi.service';
import { AppComponent } from '../app.component';

@Component({
  providers: [AppComponent],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userApi:UserapiService,
    public comp:AppComponent
    ) { }

    public userData = this.userApi.RegisterForm

  ngOnInit(): void {
    this.comp.viewUserList()
  }

 
  register() {

      if (this.userData.invalid) {
        return ;
      } else {
        // raw data
        const newUserDetails = {
  
          first_name : this.userData.value['firstName'],
          last_name :this.userData.value['lastName'],
          username :this.userData.value['userName'],
          password : this.userData.value['password'],
          user_id : this.userData.value['userId'],
          type : this.userData.value['type'],
          department : this.userData.value['department'],
          designation : this.userData.value['designation'],
        }
        this.userApi.postUsers(newUserDetails).subscribe(res => {
          this.comp.viewUserList();
          console.log(newUserDetails)
          window.alert("New user has been added successfully"); 
        })
      }
  
  }

     // functions to get input values

     get firstName() {
      return this.userApi.RegisterForm.get('fullName');
    }
    get lastName() {
      return this.userApi.RegisterForm.get('lastName');
    }
    get userName() {
      return this.userApi.RegisterForm.get('userName');
    }
    get password() {
      return this.userApi.RegisterForm.get('password')
    }
    get userId() {
      return this.userApi.RegisterForm.get('userId');
    }
    get type() {
      return this.userApi.RegisterForm.get('type')
    }
    get department() {
      return this.userApi.RegisterForm.get('department')
    }
    get designation() {
      return this.userApi.RegisterForm.get('designation');
    }




}
