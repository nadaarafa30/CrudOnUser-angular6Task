import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { GaurdsGuard } from 'src/app/shared/gaurds.guard';
import { MainFooterComponentComponent } from 'src/app/components/main-footer-component/main-footer-component.component';

const routes: Routes = [

  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'home', component: MainFooterComponentComponent,canActivate: [GaurdsGuard]
    
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
