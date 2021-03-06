import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
    private  readonly spotifyUrl = 'https://api.spotify.com/v1/';

    constructor( private _http: HttpClient) {
}

    getArtist(id: string) {
        return this._http.get( this.spotifyUrl + 'artists/' + id);
    }

    searchMusic(str: string, type= 'artist') {
        return this._http.get(this.spotifyUrl + 'search?query=' + str +
      '&offset=0&limit=50&type=' + type +
      '&market=US');
    }

    getAlbums(artistId: string) {
    return this._http.get( this.spotifyUrl + 'artists/' + artistId + '/albums');
        // .map(res => res.json());
    }

    getAlbum(id: string) {
        return this._http.get( this.spotifyUrl + 'albums/' + id);
        // .map(res => res.json());
    }

};
