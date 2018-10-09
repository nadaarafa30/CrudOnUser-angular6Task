import { Component, OnInit } from '@angular/core';
import { AllServicesService } from 'src/app/shared/all-services.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model: any = {};
  
  constructor(public AllService:AllServicesService, public router:Router) { }

  ngOnInit() {
    this.AllService.logout();
  }  
    onSubmit() {
      this.AllService.login(this.model.email,this.model.password).subscribe((data : any)=>{
        localStorage.setItem('userToken',data.json().token);
        console.log("you loggedIn: " + data.json().token )
        this.router.navigate(['/home']);
      },
      (err)=>{
        console.log(err);
      });
    }

}
