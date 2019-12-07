import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-spotify-auth',
  template: '<h3>Authentication;</h3>',
 })
export class SpotifyAuthComponent implements OnInit {


  public constructor(private authService: AuthService, private router: Router){
    this.router.navigate(['search']);
  }

  public ngOnInit(): void {
  this.router.navigate(['search']);
  }


}
