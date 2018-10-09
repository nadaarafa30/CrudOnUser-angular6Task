import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { GaurdsGuard } from 'src/app/shared/gaurds.guard';
import { DashboardComponentComponent } from 'src/app/components/dashboard-component/dashboard-component.component';

const routes: Routes = [

  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'home', component: DashboardComponentComponent,canActivate: [GaurdsGuard]
    
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
