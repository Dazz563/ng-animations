import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeSlideStateTrigger } from './shared/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeSlideStateTrigger
  ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  getAnimationData(routerOutlet: RouterOutlet) {
    const routeData = routerOutlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }

}
