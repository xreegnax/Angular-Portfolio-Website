import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Friday", pictures: ["../../assets/Image01.png","../../assets/Image02.png","../../assets/Image03.png"], projectLink: "//www.github.com", summary: "AI based virtual personal assistant", description: "This project has won second prize in a national level Hackathon(Hack 'N' Lead 2023). The project has been created by leveraging the power and functionalities of python, and neural network using python. Unlike other virtual personal assistants, our application does not provide data towards any third party service. We have used CBC(Cipher Block Chaining to ensure the authenticity of our data and most importantly, all generated data is saved in the users local system thus giving the user more control of the data", tags: [Tag.PYTHON, Tag.NEURALNETWORK]},
    {id: 1, name: "Raksha[Smart India Hackathon 2023]", pictures: ["../../assets/Image01.png","../../assets/Image02.png","../../assets/Image03.png"], projectLink: "//www.github.com", summary: "Disaster rescue service application for rescue agencies", description: "This project was created for SIH(Smart India Hackathon 2023). An application under which all rescue agencies can come together to collaborate to increase the efficiency of rescue service. The project also leverages the power of deep-learning using tensorflow library for severity analysis of disasters through computer vision", tags: [Tag.PYTHON, Tag.DEEPLEARNING, Tag.REACT, Tag.NODEJS]},
    {id: 2, name: "Melior: News Application", pictures: ["../../assets/Image01.png","../../assets/Image02.png","../../assets/Image03.png"], projectLink: "//www.github.com", summary: "Modern news application which prioritise customer security", description: "The project was created as a part of participation in a state level hackathon SYMBIOT 2022. The project was created in android studio using java. The news application allows users to cutomize news content according to their preference", tags: [Tag.ANDROID]},
    {id: 3, name: "Beef quality grading using Inception Net", pictures: ["../../assets/Image01.png","../../assets/Image02.png","../../assets/Image03.png"], projectLink: "//www.github.com", summary: "Classifying beef images into three distinct quality classes", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.PYTHON, Tag.DEEPLEARNING]},
    {id: 4, name: "Read Meat Classification and Quality Grading using Deep-Nets", pictures: ["../../assets/Image01.png","../../assets/Image02.png","../../assets/Image03.png"], projectLink: "//www.github.com", summary: "Classifying red meat images into different types and also grading their quality", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.PYTHON, Tag.DEEPLEARNING]},
    {id: 5, name: "Portfolio Website", pictures: ["../../assets/Image01.png","../../assets/Image02.png","../../assets/Image03.png"], projectLink: "//www.github.com", summary: "Angular portfolio website leveraging the power of bootstrap", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]}
  ];
  
  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filterProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll){
        filterProjects.push(project);
      }
    });

    return filterProjects
  }
}
