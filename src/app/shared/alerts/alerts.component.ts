import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AlertservService } from 'src/app/shared/alertServices/alertserv.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertservService) { 
      this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  ngOnInit() {
  }

}
