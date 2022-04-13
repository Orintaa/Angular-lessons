import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public tasks:Task[] =[];

  constructor(private taskService:TaskService) {
    taskService.load();
    this.tasks=taskService.tasks;
   }

  ngOnInit(): void {
  }

    public removeTask(i:number){
      this.tasks.splice(i, 1);
      this.taskService.save();
    }

}
