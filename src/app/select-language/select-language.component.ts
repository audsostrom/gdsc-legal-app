import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {
  selectedValue: number = 0;
  languages = ['English', 'Spanish', 'Arabic']
  
  onChange(event: MatRadioChange) {
    this.selectedValue = event.value;
  }

  constructor(private router: Router){
  }

  redirectPage(){
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() { 
  
  }

}
