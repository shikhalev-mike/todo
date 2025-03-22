import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) {}

  getProjects(search: string = ''): Observable<Project[]> {
    const params = new HttpParams().set('search', search);
    return this.http.get<Project[]>(this.apiUrl, { params });
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  updateProject(id: number, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getCountUncomplitedTask() {
    return this.http.get<{ [key: number]: number }>(`${this.apiUrl}/uncompleted-tasks`)
    .pipe();
  }
}
