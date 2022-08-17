import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskapiService } from '../services/taskapi.service';
import { Router } from '@angular/router';

@Component({
  providers: [AppComponent],
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  public taskData = this.taskApi.createTaskForm

  constructor(
    public comp:AppComponent,
    private taskApi:TaskapiService,
    private router: Router,
    ) { }

    public searchTerm = '';
    public taskById:any;
    public taskByIdCopy:any;
    public updatedTask:any;
    public task:any;

  ngOnInit(): void {
    this.comp.viewTasklist();
    
  }


 // function to get data by id to edit
 edit(pk:number) {
  console.log(pk)
  this.taskApi.getTaskById(pk).subscribe((response)=>{
    this.taskById = response;
    console.log(this.taskById)
    this.taskByIdCopy = {...response};
  })
}

onSubmit() {

    
  this.taskApi.updateTaskById(this.taskById.id, this.taskById).subscribe((response)=>{
    this.updatedTask = response;
    console.log(this.updatedTask)
    window.alert("Data updated")
    this.comp.viewTasklist();
 })
  
}

remove(pk:number) {
  this.comp.removeTask(pk)  
}
}
