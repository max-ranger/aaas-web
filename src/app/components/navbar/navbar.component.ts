import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private returnTo: string = '';

  constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.returnTo = params['returnUrl']);
  }

  logout() {
    if (this.auth.isLoggedIn()) {
      this.auth.logout();
      this.router.navigateByUrl(this.returnTo);
    }
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}
