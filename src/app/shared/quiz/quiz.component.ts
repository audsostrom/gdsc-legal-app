import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import * as confetti from 'canvas-confetti';
import { englishData } from '../../../data/data';
import { QuizModalComponent } from '../quiz-modal/quiz-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {


  selectedValue: string[] = ['', '', ''];
  questions = englishData['education-for-children']['quiz']
  answers = this.questions.map((a: { answer: any; }) => a.answer);
  dialogConfig = new MatDialogConfig();
  
  animal: string = 'bleh';
  name: string = 'blah';

  constructor(
    private router: Router,
    public dialog: MatDialog,
    ){
  }


  onChange(event: MatRadioChange, index: number) {
    this.selectedValue[index] = event.value;
  }

  submitAnswers() {
    console.log(this.selectedValue, this.answers);
    let difference = (this.selectedValue.sort().join(',') === this.answers.sort().join(','))
    // console.log("equals", difference?.length == 0 ? true : false)
    if (difference) {
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

    } else {
      const dialogRef = this.dialog.open(QuizModalComponent, this.dialogConfig);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

    }
  }

  ngOnInit() { 
  
  }

}
