import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../shared/route-animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    routeFadeStateTrigger({ startOpacity: 0, duration: '3000ms' }),
  ]
})
export class UsersComponent implements OnInit {

  // @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit(): void {
  }

}
