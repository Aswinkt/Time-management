import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { TaskapiService } from '../services/taskapi.service';


@Component({
  providers: [AppComponent],
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  public searchTerm = '';
  public taskById:any;
  public taskByIdCopy:any;
  public updatedTask:any;
  public task:any;

  constructor(
    public comp:AppComponent,
    private taskApi:TaskapiService
    
    ) { }

    ngOnInit(): void {
      this.comp.viewTasklist();
      
    }
  
  
   // function to get data by id to edit
   action(pk:number) {
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
      window.alert("Task action taken successfully")
   })
    
  }
 
}
