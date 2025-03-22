import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProjectListComponent } from "./project-list/project-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Перенаправление на /projects при загрузке приложения
    this.router.navigate(['/projects']);
  }
}
