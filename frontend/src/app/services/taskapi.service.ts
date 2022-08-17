import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskapiService {

  private url = 'http://127.0.0.1:8000/tasks/'

  constructor(private http : HttpClient) { }


  createTaskForm = new FormGroup({
    'taskId': new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"),]),
    'taskName': new FormControl('',[Validators.required, Validators.pattern("^[A-Za-z][A-Za-z ]+$"),]),
    'taskStatus' : new FormControl('', [Validators.required,]),
    'startTime' : new FormControl('', [Validators.required,]),
    'endTime' : new FormControl('', [Validators.required,]),
    'createdDate' : new FormControl('', [Validators.required,]),
    'approvalStatus' : new FormControl('', [Validators.required,]),
    'assignedManager' : new FormControl('', [Validators.required,]),
    'taskDescription' : new FormControl('', [Validators.required,])
  })
  

  getTask() {
    return this.http.get(this.url);
  }

  getTaskById(pk:number) {
    return this.http.get(this.url + pk)
  }

  postTask(newTaskDetails:object) {
    return this.http.post(this.url, newTaskDetails)
  }

  updateTaskById(pk:number,data:object) {
    return this.http.put(this.url + pk+"/", data)
  }

  deleteTaskById(pk:number) {
    return this.http.delete(this.url + pk)
  }
}

