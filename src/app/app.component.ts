import { Component } from '@angular/core';
import { Router, NavigationStart, Event, NavigationEnd } from '@angular/router';
import { UtilService } from './util/util.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoading = false;
  public showNav = false;
  constructor(private router: Router, private utilservice: UtilService, private auth: AuthService) {
    this.router.events.subscribe((routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.showLoading = true;
        }
        if (routerEvent instanceof NavigationEnd) {
          this.showLoading = false;
          if (this.utilservice.obj && this.utilservice.obj.hasOwnProperty('username')) {
            this.showNav = true;
          }
        }

    });
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
