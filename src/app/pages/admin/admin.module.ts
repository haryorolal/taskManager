import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/constants/shared.module';
import { DashboardService } from 'src/app/constants/services/dashboard.service';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [DashboardComponent, ProjectsComponent],
  providers: [DashboardService]
})
export class AdminModule { }
