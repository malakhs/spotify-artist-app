import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/shared/services/token-service';
import { sharedVariable } from 'src/global';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

   constructor(private router: Router,  private tokenSvc: TokenService) { }

  ngOnInit() {
    if ( !!this.tokenSvc.oAuthToken) {
      this.router.navigate(['search']);
    }
  }

  login() {
    window.location.href = 'https://accounts.spotify.com/authorize' +
        '?response_type=code&client_id=' + sharedVariable.clientId +
        '&scope=' + encodeURIComponent('user-read-private user-read-email')  +
        '&redirect_uri=' + encodeURIComponent(sharedVariable.baseUrl + '/authorized');
  }

}
