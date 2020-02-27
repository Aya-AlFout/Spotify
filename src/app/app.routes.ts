import { Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ArtistComponent} from './artist/artist.component';

const APP_ROUTES: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
