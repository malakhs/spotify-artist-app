import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/shared/services/spofity-service';
import { Artist } from 'src/shared/models/Artist';
import { AuthService } from 'src/shared/services/auth.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string='';
  searchRes: Artist[];
  unknown : any = '../../assets/img/person.jpg';

  constructor(private _spotifyService: SpotifyService,private authService: AuthService,private router:Router
    ,private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
  } else {
    this.route.params
    .map(params => params['artist'])
    .subscribe((name) => {
       this.searchStr = name;
       if (this.searchStr == null){
         this.searchStr = localStorage.getItem('searchartist');
       }
       this.searchMusic();
    });
  }
  }

  searchMusic() {
    this.searchRes = [];
    localStorage.setItem("searchartist", this.searchStr);
    if (this.searchStr != '' && this.searchStr != null) {
      this._spotifyService.searchMusic(this.searchStr)
      .subscribe((res: any) => {
    this.searchRes = res.artists.items;
  });
    }
}
}
