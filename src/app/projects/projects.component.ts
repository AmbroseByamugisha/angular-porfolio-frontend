import { Component, OnInit } from '@angular/core';
import { Project } from '../project'

import { ProjectService } from '../project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // projects: Project[];
  projects: Project[];
  p: number = 1;
  
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }
  
  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
  
}
