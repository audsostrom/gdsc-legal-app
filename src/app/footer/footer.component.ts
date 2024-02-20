import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { arabicData } from 'src/data/arabic';
import { englishData } from 'src/data/data';
import { spanishData } from 'src/data/spanish';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // footer is basically that bottom row on pages that takes you to home, map, or profile
  constructor(private router: Router) { }

  redirect(page: string) {
    this.router.navigate([`/${page}`]);
  }

  language: string | null = localStorage.getItem('language');

  // we love ternary operators :D
  homeText = this.language == 'English' ? 'Home' : (this.language == 'Spanish' ? 'Hogar' : 'بيت');
  mapText = this.language == 'English' ? 'Map' : (this.language == 'Spanish' ? 'Mapa' : 'خريطة');
  languageText = this.language == 'English' ? 'Language' : (this.language == 'Spanish' ? 'Lenguaje' : 'لغة');

  ngOnInit() { 
    this.language = localStorage.getItem('language');
  }
}
