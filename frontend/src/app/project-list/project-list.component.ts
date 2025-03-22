import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';
import { ProjectSummaryComponent } from '../components/project-summary/project-summary.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service'

@Component({
  selector: 'app-project-list',
  imports: [CommonModule, ProjectSummaryComponent, RouterLink, FormsModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects: Project[] = [];
  searchQuery: string = '';
  taskCount: Record<string, number> = {};

  constructor(private projectService: ProjectService, private taskService: TaskService) {}

  ngOnInit() {
    this.projectService.getCountUncomplitedTask().subscribe(data => {
        this.taskCount = data;
      });
    this.projectService.getProjects(this.searchQuery).subscribe(data => {
      this.projects = data;

    });
  }

  loadProjects() {
    this.projectService.getProjects(this.searchQuery).subscribe((data) => {
      this.projects = data;
    });
  }

  onSearch(searchQuery: string) {
    this.loadProjects();
  }
}
