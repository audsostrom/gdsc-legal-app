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

  topics = [
    {
      topic: 'Education for Children',
      route: 'education-for-children'
    },
    {
      topic: 'Education for Adults',
      route: 'education-for-adults'
    },
    {
      topic: 'Judicial Systems',
      route: 'judicial-systems',
    },
    {
      topic: 'Health Care',
      route: 'health-care',
    },
  ];

  goToTopic(topic: string) {
    this.router.navigate([`/${topic.replace(/\s+/g, '-').toLowerCase()}`, {page: topic}]);
  }

}
