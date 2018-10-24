import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { MainHeaderComponentComponent } from './components/main-header-component/main-header-component.component';
import { MainFooterComponentComponent } from './components/main-footer-component/main-footer-component.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { HttpModule,BaseRequestOptions } from '@angular/http';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { AlertsComponent } from './shared/alerts/alerts.component';
import { AlertservService } from 'src/app/shared/alertServices/alertserv.service';
import { AddEditUserComponent } from './components/dashboard-component/add-edit-user/add-edit-user.component';
import { AllServicesService } from './shared/all-services.service';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponentComponent,
    MainFooterComponentComponent,
    LoginFormComponent,
    DashboardComponentComponent,
    AlertsComponent,
    AddEditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AlertservService,AllServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
