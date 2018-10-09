import { Component, OnInit } from '@angular/core';
import { AllServicesService } from 'src/app/shared/all-services.service';

@Component({
  selector: 'app-main-header-component',
  templateUrl: './main-header-component.component.html',
  styleUrls: ['./main-header-component.component.css']
})
export class MainHeaderComponentComponent implements OnInit {

  constructor(public Services:AllServicesService) { }

  ngOnInit() {

  }

}
