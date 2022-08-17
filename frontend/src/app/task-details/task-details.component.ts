import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TaskapiService } from '../services/taskapi.service';
import { Router } from '@angular/router';

@Component({
  providers: [AppComponent],
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

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
 })
  
}


  remove(pk:number) {
    this.comp.removeTask(pk)  
  }

  

}
