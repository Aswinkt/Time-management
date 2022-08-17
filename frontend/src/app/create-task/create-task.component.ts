import { Component, OnInit } from '@angular/core';
import { TaskapiService } from '../services/taskapi.service';
import { AppComponent } from '../app.component';

@Component({
  providers: [AppComponent],
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  public taskData = this.taskApi.createTaskForm

  constructor(
    private taskApi: TaskapiService,
    public comp: AppComponent,
    ) { }
  
    
  
  ngOnInit(): void {
    this.comp.viewTasklist()
    
  }

   
  submit() {
    this.comp.createNewTask();
    this.taskData.reset();
  
    }


    }
  

