import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { englishData } from '../../data/data';
import { spanishData } from 'src/data/spanish';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { arabicData } from 'src/data/arabic';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent {
  /** Unsubscribe observable for subscriptions. */
  unsubscribe$: Subject<void> = new Subject();
  contentLength: number = 0;

  language: string | null = localStorage.getItem('language');

  // we love ternary operators :D
  data = this.language == 'English' ? englishData : (this.language == 'Spanish' ? spanishData : arabicData);

  pageSection$ = this.route.paramMap.pipe(
    map((params) => params.get('id')),
  );

  title$ = this.pageSection$.pipe(map((section) => this.data[section as keyof typeof this.data]['title']) 
  );

  content$ = this.pageSection$.pipe(map((section) => this.data[section as keyof typeof this.data]['content']) 
  );
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){
  }
  // use this text to update when people go to the next section
  // content = englishData[this.section as keyof typeof englishData]['content'];

  pageNum: number = 0;
  changeText() {
    // don't move on past a certain point
    if (this.pageNum != this.contentLength - 1) {
      this.pageNum += 1
    }
    else if (this.pageNum == this.contentLength - 1) {
      this.pageSection$.subscribe(id => {
        this.router.navigate([`/quiz/${id}`]);
      })

    }
  }
  ngOnInit() {
    // --------------- EVENT HANDLING ----------------------


    // --------------- LOAD DATA ---------------------------
    // subscription for logging major Group (used for debugging)
    this.content$.pipe(
      takeUntil(this.unsubscribe$),
    ).subscribe((content) => {
      this.contentLength = content.length;
    });

  }



}
