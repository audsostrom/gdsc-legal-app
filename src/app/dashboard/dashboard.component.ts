import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router){
  }

  topics = ['Education', 'Judicial Systems', 'Immigration Cases', 'Health Care']

  goToTopic(topic: string) {
    this.router.navigate([`/${topic.toLowerCase()}`]);
  }

}
