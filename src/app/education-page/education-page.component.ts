import { Component } from '@angular/core';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent {

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
  }


}
