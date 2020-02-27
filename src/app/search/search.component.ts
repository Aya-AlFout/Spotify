import { Component, OnInit } from '@angular/core';
import {ArtistsService} from '../services/artists.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
  }

  searchArtist(txt) {
    this.artistsService.getArtist(txt)
      .subscribe((data: any) => {
        this.artists = data;
      });
  }
}
