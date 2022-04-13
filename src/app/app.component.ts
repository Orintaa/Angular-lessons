import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private taskService:TaskService){
    this.taskService.load();
  }
  ngOnInit(): void {
    
  }

  title = 'sarasas';
}
