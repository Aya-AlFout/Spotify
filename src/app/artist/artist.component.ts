import { Component, OnInit } from '@angular/core';
import { ArtistsService} from '../services/artists.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistId: string;
  artist: any = {};
  albums: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private artistsService: ArtistsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.artistId = params.id; });
  }

  ngOnInit(): void {
    this.getArtist();
    this.getAlbums();
  }

  getArtist() {
    this.artistsService.getArtistById(this.artistId).subscribe((data: any) => {
      this.artist = data;
      console.log(data);
    });
  }

  getAlbums() {
    this.artistsService.getAlbums(this.artistId).subscribe((data: any) => {
      console.log(data);
      this.albums = data;
    });
  }
}
