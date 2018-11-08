import { Component } from '@angular/core';
import { Router, NavigationStart, Event, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoading = false;
  constructor(private route:Router) {
    this.route.events.subscribe((routerEvent:Event)=> {
        if(routerEvent instanceof NavigationStart) {
          this.showLoading = true;
        }
        if(routerEvent instanceof NavigationEnd) {
          this.showLoading = false;
        }
    })
  }
}
