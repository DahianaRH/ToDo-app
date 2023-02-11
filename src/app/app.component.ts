import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  task = '';
  tasksList: string[] = [];

  eliminartask(taskIndex: number) {
    this.tasksList.splice(taskIndex, 1);
  }

  addTask(newTask: string) {
    this.tasksList.push(newTask);
  }
}
