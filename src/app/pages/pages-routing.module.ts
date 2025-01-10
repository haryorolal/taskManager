import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../containers/home/home.component';
import { AboutusComponent } from '../containers/aboutus/aboutus.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { canActivateGuardGuard } from '../constants/guards/can-activate-guard.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"about", component: AboutusComponent},
  {path:"auth", loadChildren: () => import("./auth/auth.module").then(x => x.AuthModule)},
  {path: 'admin', canActivate: [canActivateGuardGuard], data: {expectedRole: "Admin"}, loadChildren: () => import("./admin/admin.module").then(x => x.AdminModule)},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
