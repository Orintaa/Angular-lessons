import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public tasks:Task[] =[];

  constructor() {
    let data = localStorage.getItem('tasks');
    if(data!=null){
      this.tasks = JSON.parse(data);
    }
   }

  ngOnInit(): void {
  }

  private save(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public addNewTask (name:HTMLInputElement,
    priority:HTMLSelectElement){
      if(name.value!=''){
        this.tasks.push(
          {
            name: name.value,
            priority: priority.value
          })
          name.value = '';
          priority.value = '';
          this.save();
      }
    }

    public removeTask(i:number){
      this.tasks.splice(i, 1);
      this.save();
    }

}
