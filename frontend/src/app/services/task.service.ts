import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  // Получение всех задач по projectId
  getTasksByProject(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/projects/${projectId}/tasks`);
  }

  // Добавление новой задачи
  addTask(projectId: number, task: Task): Observable<Task> {
    return this.http.post<Task>(`${environment.apiUrl}/${projectId}/tasks`, task);
  }

  // Удаление задачи
  deleteTask(projectId: number, taskId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/projects/${projectId}/tasks/${taskId}`);
  }
}
