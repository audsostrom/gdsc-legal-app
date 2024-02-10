import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { englishData } from '../../data/data';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent {
  /** Unsubscribe observable for subscriptions. */
  unsubscribe$: Subject<void> = new Subject();

  @Input() section: string = 'education-for-children'; // idk what the type is lol
  pageSection$ = this.route.paramMap.pipe(
    map((params) => params.get('page')),
  );
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    ){
  }
  // id is hardcoded, needs to be transferred to firebase later
  id: string = "education";
  // use this text to update when people go to the next section
  content = englishData[this.section as keyof typeof englishData]['content'];

  pageNum: number = 0;
  changeText() {
    // don't move on past a certain point
    if (this.pageNum != this.content.length - 1) {
      this.pageNum += 1
    }
    else if (this.pageNum == this.content.length - 1) {
      this.router.navigate([`/quiz/${this.id}`]);

    }
  }
  ngOnInit() {
    // --------------- EVENT HANDLING ----------------------


    // --------------- LOAD DATA ---------------------------
    // subscription for logging major Group (used for debugging)
    this.pageSection$.pipe(
      takeUntil(this.unsubscribe$),
    ).subscribe((majorGroup) => {
      console.log(majorGroup);
    });

  }



}
