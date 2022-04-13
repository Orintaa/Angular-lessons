import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  constructor(private taskService:TaskService, private router:Router ) { }

  ngOnInit(): void {
  }

  public addNewTask (name:HTMLInputElement,
    priority:HTMLSelectElement){
      if(name.value!=''){
          this.taskService.add(name.value, priority.value);
          name.value = '';
          priority.value = '';
          this.router.navigate(['/'])
      }
    }

}
