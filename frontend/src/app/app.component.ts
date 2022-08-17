import { Component } from '@angular/core';
import { TaskapiService } from './services/taskapi.service';
import { UserapiService } from './services/userapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  displaymenu=false;
  displaymanager=false;
  displayuser=false;



  public data: any;
  public task:any;
  public user:any;
  public taskById: any;
  public taskByIdCopy: any;
  public updatedTask:any;
  public deletedTask:any;
  public isVisible = false;
  public postData:any;
  public taskData = this.taskApi.createTaskForm;
  public userData = this.userApi.RegisterForm;
  public allTasks: any;
 
  constructor(
    private taskApi:TaskapiService,
    private userApi:UserapiService
    ){}



  ngOnInit(): void {
    this.viewTasklist();
    
  }

  // functions to get input values
  get taskId() {
    return this.taskApi.createTaskForm.get('taskId');
  }
  get taskName() {
    return this.taskApi.createTaskForm.get('taskName');
  }
  get taskStatus() {
    return this.taskApi.createTaskForm.get('taskStatus');
  }
  get startTime() {
    return this.taskApi.createTaskForm.get('startTime');
  }
  get endTime() {
    return this.taskApi.createTaskForm.get('endTime');
  }
  get createdDate() {
    return this.taskApi.createTaskForm.get('createdDate');
  }
  get approvalStatus() {
    return this.taskApi.createTaskForm.get('approvalStatus');
  }
  get assigneddManager() {
    return this.taskApi.createTaskForm.get('assigneddManager');
  }
  get taskDescription() {
    return this.taskApi.createTaskForm.get('taskDescription');
  }


  viewTasklist() {
    this.taskApi.getTask().subscribe((task)=>{
      this.task = task;
      console.log(this.task)
  
    })
  }

  viewUserList() {
    this.userApi.getUser().subscribe((user=>{
      this.user = user;
      console.log(this.user)
    }))
  }

  viewTaskDetail(pk:number) {
    this.taskApi.getTaskById(pk).subscribe((task)=>{
      this.task = task;
    })
  }

  createNewTask() {
    if (this.taskData.invalid) {
      return ;
    } else {
      // raw data
      const newTaskDetails = {

        task_id : this.taskData.value['taskId'],
        task_name : this.taskData.value['taskName'],
        task_status : this.taskData.value['taskStatus'],
        start_time : this.taskData.value['startTime'],
        end_time : this.taskData.value['endTime'],
        created_date : this.taskData.value['createdDate'],
        approval_status : this.taskData.value['approvalStatus'],
        assigned_manager : this.taskData.value['assignedManager'],
        task_description : this.taskData.value['taskDescription'],
      }
      this.taskApi.postTask(newTaskDetails).subscribe(res => {
        this.viewTasklist() ;
        window.alert("New task has been added successfully"); 
      })
    }
  }

   // function to get data by id to edit
   editTask(id:number) {
    console.log(id)
    this.taskApi.getTaskById(id).subscribe((response)=>{
      this.taskById = response;
      console.log(this.taskById)
      this.taskByIdCopy = {...response};
    })
  }

  // function to remove data
  removeTask(id: number) {
    this.taskApi.deleteTaskById(id).subscribe((response)=>{
      window.alert("Task details has been deleted successfully");
      console.log(response)
    })
  }

  // function to submit edit form
  onSubmit() {

    
    this.taskApi.updateTaskById(this.taskById.id, this.taskById).subscribe((response)=>{
      this.updatedTask = response;
      console.log(this.updatedTask)
   })
    
  }

  


}

