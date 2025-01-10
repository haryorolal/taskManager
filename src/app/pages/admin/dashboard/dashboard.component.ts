import { Component, OnInit } from '@angular/core';
import { allimages } from 'src/app/constants/images';
import { faUser, faPhone, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { DashboardService } from '../../../constants/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  public images = allimages
  userIcon = faUser
  phone = faPhone
  busy = faUserTimes

  Designation: string = '';
  Username: string = '';
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpcomingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  Today: Date = new Date()

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any[] = [];
  TeamMembers: any[] = [];

  constructor (private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "James Daniel";
    this.NoOfTeamMembers = 67,
    this.TotalCostOfAllProjects = 204;
    this.PendingTasks = 15;
    this.UpcomingProjects = 0.2;
    this.ProjectCost = 2339434;
    this.CurrentExpenditure = 98483;
    this.AvailableFunds = 58483;
    this.Today = new Date();

    this.Clients = [
      "ABC Infotechs Ltd.", "DEF Soft Solutions", "GHI Industries"
    ];

    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ]

    for (let i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = [
      {Region: "East", Members: [
          {Id: 1, Name: "Ford", Status: "Available"},
          {Id: 1, Name: "Dave", Status: "Available"},
          {Id: 1, Name: "James", Status: "Busy"},
          {Id: 1, Name: "Bose", Status: "Busy"}
        ]
      },
      {Region: "West", Members: [
        {Id: 1, Name: "Enoch", Status: "Available"},
        {Id: 1, Name: "Rick", Status: "Busy"},
        {Id: 1, Name: "Jordan", Status: "Available"},
        {Id: 1, Name: "Kate", Status: "Busy"}
        ]
      },
      {Region: "South", Members: [
        {Id: 1, Name: "Jayden", Status: "Available"},
        {Id: 1, Name: "Frank", Status: "Available"},
        {Id: 1, Name: "Allen", Status: "Available"},
        {Id: 1, Name: "John", Status: "Available"}
        ]
      },
      {Region: "North", Members: [
        {Id: 1, Name: "Daniel", Status: "Busy"},
        {Id: 1, Name: "Rake", Status: "Busy"},
        {Id: 1, Name: "Bait", Status: "Busy"},
        {Id: 1, Name: "Prince", Status: "Busy"}
        ]
      }
    ]

  }


  OnProjectChange(event:any) {
    let ev = event.target.innerHTML;
    if (ev === "Project A") {
      this.ProjectCost = 2234334;
      this.CurrentExpenditure = 49345;
      this.AvailableFunds = 53414
    } else if (ev === "Project B") {
      this.ProjectCost = 39294;
      this.CurrentExpenditure = 3824;
      this.AvailableFunds = 399840
    } else if (ev === "Project C") {
      this.ProjectCost = 573845;
      this.CurrentExpenditure = 343;
      this.AvailableFunds = 493343
    } else if (ev === "Project D") {
      this.ProjectCost = 39284;
      this.CurrentExpenditure = 74783;
      this.AvailableFunds = 298324
    } 
  }

}
