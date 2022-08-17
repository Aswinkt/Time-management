import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  private url = 'http://127.0.0.1:8000/users/';

  constructor(private http : HttpClient) { }

  // login form input field validation
  RegisterForm = new FormGroup({
    'firstName': new FormControl('',[Validators.required, Validators.pattern("^[A-Za-z][A-Za-z ]+$")]),
    'lastName': new FormControl('',[Validators.required, Validators.pattern("^[A-Za-z][A-Za-z ]+$")]),
    'userName': new FormControl('',[Validators.required, Validators.pattern("^[A-Za-z][A-Za-z ]+$"), Validators.minLength(4)]),
    'password': new FormControl('',[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$")]),
    'userId': new FormControl('', [Validators.required]),
    'type': new FormControl('', [Validators.required]),
    'department': new FormControl('', [Validators.required]),
    'designation': new FormControl('', [Validators.required]),
  })

  getUser() {
    return this.http.get(this.url);
  }

  getUserById(pk:number) {
    return this.http.get(this.url + pk);
  }

  postUsers(newUserDetails:object) {
    return this.http.post(this.url, newUserDetails);
  }

  updateUserById(pk:number,data:object) {
    return this.http.put(this.url +pk+"/", data);
  }

  deleteUserById(pk:number) {
    return this.http.delete(this.url + pk);
  }

  loginUser(userData:any) {
    return this.http.post('http://127.0.0.1:8000/auth/', userData);
  }
}
