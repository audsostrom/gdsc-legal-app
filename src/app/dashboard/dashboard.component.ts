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
      route: 'education-for-children',
    },
    {
      topic: 'Education for Adults',
      route: 'education-for-adults',
    },
    {
      topic: 'Understand the Help You Need',
      route: 'understand-the-help-you-need',
    },
    {
      topic: 'Labor Laws for Immigrants',
      route: 'labor-laws',
    },
    {
      topic: 'Resources',
      route: 'resources',
    },
    {
      topic: 'Getting The Help You Need',
      route: 'understand-the-help-you-need',
    },
    {
      topic: 'Labour Laws',
      route: 'labor-laws',

    },
    {
      topic: 'Judicial System',
      route: 'judicial-system',
    }
    
  ];

  goToTopic(topic: string) {
    this.router.navigate([`section/${topic.replace(/\s+/g, '-').toLowerCase()}/`]);
  }

}