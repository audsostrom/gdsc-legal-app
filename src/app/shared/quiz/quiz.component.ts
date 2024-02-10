import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import * as confetti from 'canvas-confetti';
import { englishData } from '../../../data/data';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {


  selectedValue: string[] = ['', '', ''];
  questions = englishData['education-for-children']['quiz']
  answers = this.questions.map((a: { answer: any; }) => a.answer);
  
  onChange(event: MatRadioChange, index: number) {
    this.selectedValue[index] = event.value;
  }
  submitAnswers() {
    console.log(this.selectedValue, this.answers);
    let difference = this.selectedValue.filter(x => !this.answers.includes(x));
    console.log("equals", difference?.length == 0 ? true : false)
    if (difference?.length == 0) {
      console.log('death')
      confetti.create()({
        shapes: ['square'],
        particleCount: 200,
        spread: 200,
        origin: {
            y: (2),
            x: (1),
        }
      });
      this.router.navigate(['/congrats']);

    }
  }

  constructor(private router: Router){
  }

  ngOnInit() { 
  
  }

}
