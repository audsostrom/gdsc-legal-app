import { Component, OnInit } from '@angular/core';
import { FactService } from '../fact.service';


@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css'],
  providers: [FactService],
})
export class FactComponent implements OnInit {
  currentFact!: string;
  currentHeader!: string;

  constructor(private factService: FactService) {}

  ngOnInit(): void {
    this.currentFact = this.factService.getCurrentFact();
    this.currentHeader = this.factService.getCurrentHeader();
  }

  nextFact(): void {
    this.factService.nextFact();
    this.currentFact = this.factService.getCurrentFact();
    this.currentHeader = this.factService.getCurrentHeader();
  }
}
