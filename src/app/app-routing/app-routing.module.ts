import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', canActivate: [AuthGuard], children: [
  //     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //     { path: 'dashboard', component: DeliveryRequestDetailsFormComponent },
  //     { path: 'table', component: EquipmentRequestDetailsTableComponent }
  //   ]
  // },
  // {
  //   path: 'login', component: UserComponent,
  //   children: [{ path: '', component: SignInComponent }]
  // }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
