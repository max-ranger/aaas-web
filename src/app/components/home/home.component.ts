import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private returnTo: string = '';

  constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.returnTo = params['returnUrl']);
  }

  login() {
    if (this.auth.login()) {
      this.router.navigateByUrl(this.returnTo);
    } else {
      // TODO error message
    }
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}
