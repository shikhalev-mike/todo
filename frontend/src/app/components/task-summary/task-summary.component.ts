import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-summary',
  imports: [DatePipe, CommonModule],
  templateUrl: './task-summary.component.html',
  styleUrl: './task-summary.component.css'
})
export class TaskSummaryComponent {
  @Input() task!: Task;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  onDelete(): void {
    this.delete.emit(this.task.id);
  }
}