import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

}
