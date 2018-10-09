import { Component, OnInit } from '@angular/core';
import { AllServicesService } from 'src/app/shared/all-services.service';
import { Router } from '@angular/router'
import { AlertservService } from 'src/app/shared/alertServices/alertserv.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model: any = {};
  
  constructor(public AllService:AllServicesService, public router:Router, private alertService: AlertservService) { }

  ngOnInit() {
    this.AllService.logout();
  }  
    onSubmit() {
      this.AllService.login(this.model.email,this.model.password).subscribe((data : any)=>{
        localStorage.setItem('userToken',data.json().token);
        this.alertService.success("You are Logged In Now");
        this.router.navigate(['/home']);
      },
      (err)=>{
        console.log(err.json());
        this.alertService.error(err.json().error);
        
      });
    }

}
