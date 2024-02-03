import { Component } from '@angular/core';
import { FactService } from '../fact.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  constructor(private factService: FactService) {

}
}
