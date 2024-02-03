import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  selectedValue: number = 0;
  questions = [

    {
      prompt: 'What is 2+2?',
      options: [2, 3, 4],
      answerIndex: 2,
    },
    {
      prompt: 'What is 2+3?',
      options: [2, 3, 5],
      answerIndex: 2,

    },
    {
      prompt: 'What is 2+4?',
      options: [2, 3, 6],
      answerIndex: 2,
    },
  ]
  
  onChange(event: MatRadioChange) {
    this.selectedValue = event.value;
  }

  constructor(private router: Router){
  }

  redirectPage(){
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() { 
  
  }

}
