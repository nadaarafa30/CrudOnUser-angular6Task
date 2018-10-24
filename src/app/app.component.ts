import { Component } from '@angular/core';
import { AllServicesService } from './shared/all-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isloading;
  constructor(public serv:AllServicesService){
  }
  title = 'CrudOnUser-angular6Task';
}
