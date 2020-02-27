import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private url = 'https://api.spotify.com/v1/search';

  private headers: HttpHeaders = new HttpHeaders({
    // tslint:disable-next-line:max-line-length
    Authorization: 'Bearer BQBs3Zp_4XkIUcE6bA7VlNwHbB1RmApZ1eHSopS6bJgMjbsBuZJcScXK3clHiq-jwSYM2-_Gpgr2voOwPIrD3iehXPwbsQRBvzXJvWwdhMNuPgFyJhaGHpzG-cGbjINRUNakguNuiDVpBfTFE_0WTxbtE3w0VkA'
  });


  constructor( private http: HttpClient) { }

  getArtist(txt: string) {
    return this.http.get(this.url + `search?q=${ txt }&type=artist&market=US&offset=0&limit=20`, {headers: this.headers})
      .pipe( map(data => data['artists'].items));
  }

  getArtistById(id: string) {
    return this.http.get(this.url + `artists/${id}`, {headers: this.headers});
  }

  getAlbums(id: string) {
    return this.http.get(this.url + `artists/${id}/albums?country=us`, {headers: this.headers})
      .pipe(map(data => data['albums']));
  }
}
