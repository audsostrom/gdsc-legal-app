import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gdsc-legal-app';
  path = this.router.url;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    console.log(router.url );
    
  }

  ngOnInit() { 
  }
}
