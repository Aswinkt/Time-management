import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TaskapiService } from '../services/taskapi.service';



@Component({
  providers: [AppComponent],
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  
  public task:any;
 

  constructor(
    private comp: AppComponent,
    private api: TaskapiService,) { }

  ngOnInit(): void {
    
  }
 
  type = 'bar';
  data = {
    labels: ["No.of Tasks", "No.of Employees", "Success Tasks", "Failed Tasks","Pending Tasks", "Achievements"],
    datasets: [
      {     
        label: "Task Status till last year",
        fill:'true',
        backgroundColor: ["#8a3ab9", "#4c68d7","#cd486b","#fbad50","#bc2a8d","#9be8bf"],
        data: [768,180,655,43,70,304]
      }
    ]
  };

options = {
  legend: {
    display: true
},
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      { display: true,
                gridLines: {
                    display:false
                }
            }],
    yAxes: [
      {
                display: true,
                gridLines: {
                    display:false
                }   
            }]
}
}


}
