import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model: any = {};
  
  constructor() { }

  ngOnInit() {
  }  
    onSubmit() {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    }

}
