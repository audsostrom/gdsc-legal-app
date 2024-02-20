import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { englishData } from 'src/data/data';
import { spanishData } from 'src/data/spanish';
import { arabicData } from 'src/data/arabic';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router){
  }
  language: string | null = localStorage.getItem('language');

  // we love ternary operators :D
  data = this.language == 'English' ? englishData : (this.language == 'Spanish' ? spanishData : arabicData);

  titleText = this.language == 'English' ? "What would you like to learn about?" : (this.language == 'Spanish' ? "¿Sobre qué te gustaría aprender?" : "ماذا تريد أن تتعلم عنه؟");

  topics = [
    {
      topic: this.data['education-for-children' as keyof typeof this.data].title,
      route: 'education-for-children',
    },
    {
      topic: this.data['education-for-adults' as keyof typeof this.data].title,
      route: 'education-for-adults',
    },
    {
      topic: this.data['understand-the-help-you-need' as keyof typeof this.data].title,
      route: 'understand-the-help-you-need',
    },
    {
      topic: this.data['labor-laws' as keyof typeof this.data].title,
      route: 'labor-laws',
    },
    {
      topic: this.data['resources' as keyof typeof this.data].title,
      route: 'resources',
    },
    {
      topic:  this.data['judicial-system' as keyof typeof this.data].title,
      route: 'judicial-system',
    }
    
  ];

  goToTopic(topic: string) {
    this.router.navigate([`section/${topic.replace(/\s+/g, '-').toLowerCase()}/`]);
  }

}