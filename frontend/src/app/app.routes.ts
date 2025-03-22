import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    { path: 'projects', component: ProjectListComponent },
    { path: 'projects/:projectId', component: EditProjectComponent },
    { path: 'projects/:projectId/tasks', component: TaskListComponent }
    //{ path: '', redirectTo: 'projects', pathMatch: 'full' }, // Перенаправление на /projects по умолчанию
    //{ path: '**', redirectTo: 'projects' }
];
