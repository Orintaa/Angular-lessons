import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskItemComponent } from './components/task/task-item/task-item.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskNewComponent } from './components/task/task-new/task-new.component';
import { TaskEditComponent } from './components/task/task-edit/task-edit.component';

const tasksRoutes:Routes=[
  {path:'', component:TaskComponent},
  {path:'naujas', component:TaskNewComponent},
  {path: 'edit/:index', component:TaskEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskItemComponent,
    NavigationComponent,
    TaskNewComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(tasksRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
