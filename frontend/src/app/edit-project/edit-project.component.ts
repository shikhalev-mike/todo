import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from "../create-project/create-project.component";


@Component({
  selector: 'app-edit-project',
  imports: [ReactiveFormsModule, TaskListComponent, CommonModule, CreateProjectComponent],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css'
})
export class EditProjectComponent {
  projectForm!: FormGroup;
  isEditMode: boolean = false;
  projectId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit(): void {
    this.projectId = +this.route.snapshot.paramMap.get('projectId')!;
    if (this.projectId) {
      this.isEditMode = true;
      this.projectService.getProject(this.projectId).subscribe(project => {
        this.projectForm.patchValue(project);
      });
    }
  }

  

  saveProject(): void {
    const project: Project = this.projectForm.value;
    if (this.isEditMode) {
      this.projectService.updateProject(this.projectId!, project).subscribe(() => {
        this.router.navigate(['/projects']);
      });
    } else {
      this.projectService.createProject(project).subscribe(() => {
        this.router.navigate(['/projects']);
      });
    }
  }
}
