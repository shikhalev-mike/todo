import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskSummaryComponent } from '../components/task-summary/task-summary.component';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskSummaryComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() projectId!: number;
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: ActivatedRoute, private rout: Router) {}

  ngOnInit() {
    //this.projectId = this.route.snapshot.paramMap.get('projectId');
    //console.log('Полученный projectId из URL:', this.projectId); // Логирование для отладки
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasksByProject(this.projectId).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(this.projectId, taskId).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      //this.rout.navigate(['/projects/', this.projectId]);
    });
  }
}
