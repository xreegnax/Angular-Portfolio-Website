import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollpsed: boolean = true;
  filtering: boolean = false;

  typescript: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  deeplearning: boolean = false;
  android: boolean = false;

  angular: boolean = false;
  react: boolean = false;
  neuralnetwork: boolean = false;
  nodejs: boolean = false;
  
  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Sreeganesh - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.deeplearning) {
      filterTags.push(Tag.DEEPLEARNING);
    }
    if (this.android) {
      filterTags.push(Tag.ANDROID);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.neuralnetwork) {
      filterTags.push(Tag.NEURALNETWORK);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }

    if (this.python || this.deeplearning || this.android || this.angular || this.typescript || this.nodejs || this.neuralnetwork || this.javascript || this.react){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.python = false;
    this.deeplearning = false;
    this.android = false;
    this.angular = false;
    this.typescript = false;
    this.nodejs = false;
    this.neuralnetwork = false;
    this.javascript = false;
    this.react = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
