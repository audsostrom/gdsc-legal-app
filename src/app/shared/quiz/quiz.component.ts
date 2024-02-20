import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import * as confetti from 'canvas-confetti';
import { englishData } from '../../../data/data';
import { QuizModalComponent } from '../quiz-modal/quiz-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { map } from 'rxjs';
import { spanishData } from 'src/data/spanish';
import { arabicData } from 'src/data/arabic';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  pageSection$ = this.route.paramMap.pipe(
    map((params) => params.get('id')),
  );

  language: string | null = localStorage.getItem('language');

  // we love ternary operators :D
  data = this.language == 'English' ? englishData : (this.language == 'Spanish' ? spanishData : arabicData);


  title$ = this.pageSection$.pipe(map((section) => this.data[section as keyof typeof this.data]['title']) 
  );

  selectedValue: string[] = ['', '', ''];
  questions$ = this.pageSection$.pipe(map((section) => this.data[section as keyof typeof this.data]['quiz']))
  answers$ = this.pageSection$.pipe(map((section) => this.data[section as keyof typeof this.data]['quiz'].map(a => a.answer)));
  
  animal: string = 'bleh';
  name: string = 'blah';
  difference: boolean | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    ){
  }


  onChange(event: MatRadioChange, index: number) {
    this.selectedValue[index] = event.value;
  }

  submitAnswers() {
    this.answers$.subscribe((answers) => 
      this.difference = (this.selectedValue.sort().join(',') === answers.sort().join(','))
    )
    // console.log("equals", difference?.length == 0 ? true : false)
    if (this.difference) {
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
      const dialogRef = this.dialog.open(QuizModalComponent, {
        width: '250px',
        panelClass: ['bg-color'], // Add your custom panel class
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

    }
  }

  ngOnInit() { 
  
  }

}
