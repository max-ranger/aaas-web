import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  login: any = {
    username: '',
    password: ''
  }

  private returnTo: string = '';

  constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.returnTo = params['returnUrl']);
  }

  submitForm() {
    if (this.auth.login(this.login.username, this.login.password)) {
      this.router.navigateByUrl(this.returnTo);
    } else {
      //TODO: error message
    }
  }
}
