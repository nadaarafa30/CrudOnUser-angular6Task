import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';

const routes: Routes = [

  {
    path: 'login', component: LoginFormComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
