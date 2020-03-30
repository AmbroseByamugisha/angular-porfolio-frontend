import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgxLinkifyOptions } from 'ngx-linkifyjs';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {

  options: NgxLinkifyOptions =
   {
    attributes: null,
    className: 'linkified',
    defaultProtocol: 'http',
    events: null,
    format: function (value, type) {
      return value;
    },
    formatHref: function (href, type) {
      return href;
    },
    ignoreTags: [],
    nl2br: false,
    tagName: 'a',
    target: {
      url: '_blank'
    },
    validate: true
  };
  // project: Project;
  project: Project;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const id =  +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }
}

