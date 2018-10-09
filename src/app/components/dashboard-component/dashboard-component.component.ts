import { Component, OnInit } from '@angular/core';
import { AllServicesService } from 'src/app/shared/all-services.service';
import { AllUser } from 'src/app/shared/DataModel';
import { AlertservService } from 'src/app/shared/alertServices/alertserv.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  constructor(private APIs:AllServicesService,private alertService:AlertservService) { }
   allUsers=[];
   pageNumber=1;
   totalusers=0;
  
   ngOnInit() {
    this.GetAllUsers(this.pageNumber);
   }

   GetAllUsers(num){
    this.APIs.GetallUsers(num).subscribe(data=>{
      this.allUsers= [...this.allUsers,...data.json().data];;
      this.totalusers=data.json().total_pages;
      this.pageNumber=data.json().page;
      console.log(this.allUsers);
      console.log('Total: '+this.totalusers);
      console.log('Page Num: '+this.pageNumber);
    },
    (err)=>{
      this.alertService.error(err.json().error);
    });
  }

  loadMore(){
     if(this.pageNumber < this.totalusers){
      this.pageNumber =this.pageNumber+1;
      this.GetAllUsers(this.pageNumber);      
     }
  }
}
