import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { englishData } from '../../data/data';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent {

  @Input() section: string = 'education-for-children'; // idk what the type is lol
  constructor(private router: Router){
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


}
