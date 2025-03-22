import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-summary',
  imports: [RouterLink, DatePipe],
  templateUrl: './project-summary.component.html',
  styleUrl: './project-summary.component.css'
})
export class ProjectSummaryComponent {
  @Input() project!: Project;
  @Input() incompleteTasksCount: number = 0;

  constructor(private projectService: ProjectService) {}
}
