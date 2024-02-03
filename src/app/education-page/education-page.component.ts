import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent {
  constructor(private router: Router){
  }

  // id is hardcoded, needs to be transferred to firebase later
  id: string = "education";
  // use this text to update when people go to the next section
  content = [
    {
      headerTitle: 'header 1',
      bodyText: 'hello',
      image: '../../assets/images/education-2.jpeg'
    },
    {
      headerTitle: 'header 2',
      bodyText: 'lorem ipsum',
      image: '../../assets/images/education-2.jpeg'
    },

  ] 
  pageNum = 0
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
