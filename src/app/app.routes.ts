import { Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';

const APP_ROUTES: Routes = [
  {path: 'search', component: SearchComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
