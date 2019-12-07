import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Artist } from 'src/shared/models/Artist';
import { Album } from 'src/shared/models/Album';
import { SpotifyService } from 'src/shared/services/spofity-service';
@Component({
    selector: 'artist',
    templateUrl: 'artist.component.html',
    styleUrls:  ['artist.component.css']
})

export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist;
    albums: Album[];
    unknown: any = '../../assets/img/person.jpg';

    constructor(
        private _spotifyService: SpotifyService, private _route: ActivatedRoute, private _router: Router) {
        }
     ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                    .subscribe((artist: any) => {
                        this.artist = artist;
                    });
                this._spotifyService.getAlbums(id)
                    .subscribe((albums: any) => {
                        this.albums = albums.items;
                    });
            });
    }
}
