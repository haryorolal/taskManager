import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../constants/services/projects.service';
import { Project } from 'src/app/constants/models/project';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: number = 0;
  deleteProject: Project = new Project();
  deleteIndex: number = 0;
  searchBy: string = "ProjectName";
  searchText: string = "";
  seachIcon = faSearch

  constructor(private projectService: ProjectsService ) {

  }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (res: Project[]) => {
        this.projects = res;
        console.log(this.projects)
      }
    })
  }

  OnSaveClick() {
    if (this.newProject) {
      console.log(this.newProject)

      this.projectService.insertProject(this.newProject).subscribe({
        next: (res: Project) => {
          const cloneNewProject: Project = {...res}
          this.projects.push(cloneNewProject);
        },
        error: (err) => {
          console.error("Error saving project", err);
          alert("Failed to save project. Please try again.");
        },
        complete:() =>{
          //reset the  form
          this.newProject = new Project();
          alert("Project Successfully Posted")
        }
      })
    }
  }

  OnEditClick(event: Event, index:number) {
    // this.editProject.projectId = this.projects[index].projectId;
    // this.editProject.projectName = this.projects[index].projectName;
    // this.editProject.dateOfStart = this.projects[index].dateOfStart;
    // this.editProject.teamSize = this.projects[index].teamSize;
    // this.editProject.active = this.projects[index].active;
    // this.editProject.status = this.projects[index].status;
    this.editProject = {...this.projects[index] }
    this.editIndex = index;
  }

  OnUpdateClick() {
    this.projectService.updateProject(this.editProject).subscribe({
      next: (res: Project) => {
        const cloneEditProject: Project = {...res}
        this.projects[this.editIndex] = cloneEditProject;
      },
      error: (err) => {
        console.error("Error updating project:", err);
        alert("Failed to update the project. Please try again.");
      },
      complete: () => {
        this.editProject = new Project();
        this.editIndex = -1;
        alert("Successfully edited");
      }
    })
  }

  OnDeleteClick(event: Event, index: number){
    this.deleteIndex = index;
    this.deleteProject = {...this.projects[index] }
  }

  OnDeleteConfirm() {
    console.log(this.deleteProject.projectID);
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe({
      next: (res) => {
        this.projects.splice(this.deleteIndex, 1);
      },
      error: (err) => {
        console.error("Error deleting project", err);
        alert("Failed to Delete project. Please try again.")
      },
      complete: () => {
        this.deleteIndex = -1;
        alert("Successfully Deleted");
      }
    })
  }

  OnSearchClick() {
    this.projectService.searchProject(this.searchBy, this.searchText).subscribe({
      next:(res:Project[]) => {
        this.projects = res;
      },
      error:(err) =>{
        console.error("Error Searching projsct", err);
      },
      complete:() =>{
        //this.projects = [];
        if (this.searchBy == "") {
          this.getAllProjects();
        }
      }
    })
  }

}
